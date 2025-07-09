import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { db } from '~/server/db';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-06-30.basil',
});

export async function POST(request: NextRequest) {
  try {
    const { email, userInfo } = await request.json();

    // Update user's status to pending deposit (only if email exists)
    if (email && email !== 'user@example.com') {
      try {
        await db.waitlist.upsert({
          where: { email },
          update: {
            depositStatus: 'pending',
          },
          create: {
            email,
            depositStatus: 'pending',
          },
        });
      } catch (dbError) {
        console.error('Database error (continuing anyway):', dbError);
      }
    }

    // Create checkout session with authorization hold
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'Priority Waitlist Position',
              description: 'Fully refundable deposit for priority early access',
            },
            unit_amount: 10000, // $100 in cents
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      payment_intent_data: {
        capture_method: 'manual', // This creates an authorization hold
        metadata: {
          type: 'priority_deposit',
          email: email,
          user_info: JSON.stringify(userInfo),
        },
      },
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/early-access/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/early-access/cancel`,
      customer_email: email,
      metadata: {
        type: 'priority_deposit',
        email: email,
      },
    });

    return NextResponse.json({ sessionId: session.id });
  } catch (error) {
    console.error('Stripe checkout error:', error);
    return NextResponse.json(
      { error: 'Failed to create checkout session' },
      { status: 500 }
    );
  }
}