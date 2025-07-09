import { NextRequest, NextResponse } from 'next/server';
import { db } from '~/server/db';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const email = searchParams.get('email');

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    const waitlistEntry = await db.waitlist.findUnique({
      where: { email },
      select: {
        depositStatus: true,
        depositAmount: true,
        depositDate: true,
        stripePaymentId: true,
      },
    });

    if (!waitlistEntry) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    return NextResponse.json({
      depositStatus: waitlistEntry.depositStatus,
      depositAmount: waitlistEntry.depositAmount,
      depositDate: waitlistEntry.depositDate,
      hasDeposit: waitlistEntry.depositStatus !== 'none',
      isPriority: ['authorized', 'captured'].includes(waitlistEntry.depositStatus),
    });
  } catch (error) {
    console.error('Error fetching deposit status:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const { email, action } = await request.json();

    if (!email || !action) {
      return NextResponse.json({ error: 'Email and action are required' }, { status: 400 });
    }

    const waitlistEntry = await db.waitlist.findUnique({
      where: { email },
    });

    if (!waitlistEntry) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    if (action === 'refund' && waitlistEntry.stripePaymentId) {
      // Handle refund logic here
      const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
      
      try {
        await stripe.paymentIntents.cancel(waitlistEntry.stripePaymentId);
        
        await db.waitlist.update({
          where: { email },
          data: {
            depositStatus: 'refunded',
          },
        });

        return NextResponse.json({ 
          success: true, 
          message: 'Deposit refunded successfully' 
        });
      } catch (stripeError) {
        console.error('Stripe refund error:', stripeError);
        return NextResponse.json({ 
          error: 'Failed to process refund' 
        }, { status: 500 });
      }
    }

    return NextResponse.json({ error: 'Invalid action' }, { status: 400 });
  } catch (error) {
    console.error('Error processing deposit action:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}