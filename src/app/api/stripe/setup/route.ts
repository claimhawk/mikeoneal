import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import { CONSULTATION_PRICE } from '@/lib/stripe';

export const dynamic = 'force-dynamic';

export async function POST() {
  try {
    const secretKey = process.env.STRIPE_SECRET_KEY;
    if (!secretKey) {
      return NextResponse.json(
        { error: 'Stripe not configured', hasKey: false },
        { status: 500 }
      );
    }
    
    // Debug: check key format
    if (!secretKey.startsWith('sk_')) {
      return NextResponse.json(
        { error: 'Invalid key format', keyPrefix: secretKey.substring(0, 10) },
        { status: 500 }
      );
    }

    // Create fresh Stripe instance per request
    const stripe = new Stripe(secretKey);

    // Create a PaymentIntent for the consultation
    const paymentIntent = await stripe.paymentIntents.create({
      amount: CONSULTATION_PRICE,
      currency: 'usd',
      automatic_payment_methods: {
        enabled: true,
      },
    });

    return NextResponse.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    console.error('Error creating payment intent:', error);
    const message = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json(
      { error: 'Failed to initialize payment', details: message },
      { status: 500 }
    );
  }
}
