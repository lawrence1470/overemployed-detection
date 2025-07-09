import { NextRequest, NextResponse } from 'next/server';
import { headers } from 'next/headers';
import Stripe from 'stripe';
import { db } from '~/server/db';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-06-20',
});

const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET!;

export async function POST(request: NextRequest) {
  const body = await request.text();
  const sig = headers().get('stripe-signature')!;

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(body, sig, endpointSecret);
  } catch (err) {
    console.error('Webhook signature verification failed:', err);
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });
  }

  try {
    switch (event.type) {
      case 'checkout.session.completed':
        await handleCheckoutCompleted(event.data.object as Stripe.Checkout.Session);
        break;
      
      case 'payment_intent.succeeded':
        await handlePaymentIntentSucceeded(event.data.object as Stripe.PaymentIntent);
        break;
      
      case 'payment_intent.payment_failed':
        await handlePaymentIntentFailed(event.data.object as Stripe.PaymentIntent);
        break;
      
      case 'payment_intent.canceled':
        await handlePaymentIntentCanceled(event.data.object as Stripe.PaymentIntent);
        break;
      
      default:
        console.log(`Unhandled event type: ${event.type}`);
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error('Webhook handler failed:', error);
    return NextResponse.json({ error: 'Webhook handler failed' }, { status: 500 });
  }
}

async function handleCheckoutCompleted(session: Stripe.Checkout.Session) {
  const email = session.customer_email || session.customer_details?.email;
  const paymentIntentId = session.payment_intent as string;
  
  if (!email || !paymentIntentId) {
    console.error('Missing email or payment intent ID in checkout session');
    return;
  }

  // Retrieve the payment intent to get the status
  const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);
  
  await db.waitlist.upsert({
    where: { email },
    update: {
      depositStatus: paymentIntent.status === 'requires_capture' ? 'authorized' : 'pending',
      stripePaymentId: paymentIntentId,
      depositAmount: paymentIntent.amount,
      depositDate: new Date(),
    },
    create: {
      email,
      depositStatus: paymentIntent.status === 'requires_capture' ? 'authorized' : 'pending',
      stripePaymentId: paymentIntentId,
      depositAmount: paymentIntent.amount,
      depositDate: new Date(),
    },
  });

  console.log(`Updated deposit status for ${email}: ${paymentIntent.status}`);
}

async function handlePaymentIntentSucceeded(paymentIntent: Stripe.PaymentIntent) {
  const email = paymentIntent.metadata.email;
  
  if (!email) {
    console.error('Missing email in payment intent metadata');
    return;
  }

  await db.waitlist.update({
    where: { email },
    data: {
      depositStatus: 'captured',
    },
  });

  console.log(`Payment captured for ${email}`);
}

async function handlePaymentIntentFailed(paymentIntent: Stripe.PaymentIntent) {
  const email = paymentIntent.metadata.email;
  
  if (!email) {
    console.error('Missing email in payment intent metadata');
    return;
  }

  await db.waitlist.update({
    where: { email },
    data: {
      depositStatus: 'failed',
    },
  });

  console.log(`Payment failed for ${email}`);
}

async function handlePaymentIntentCanceled(paymentIntent: Stripe.PaymentIntent) {
  const email = paymentIntent.metadata.email;
  
  if (!email) {
    console.error('Missing email in payment intent metadata');
    return;
  }

  await db.waitlist.update({
    where: { email },
    data: {
      depositStatus: 'refunded',
    },
  });

  console.log(`Payment canceled/refunded for ${email}`);
}