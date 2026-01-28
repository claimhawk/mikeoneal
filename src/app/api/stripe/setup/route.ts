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
    
    // Debug: check key format and length
    if (!secretKey.startsWith('sk_')) {
      return NextResponse.json(
        { error: 'Invalid key format', keyPrefix: secretKey.substring(0, 10), keyLen: secretKey.length },
        { status: 500 }
      );
    }

    // Create fresh Stripe instance per request with longer timeout
    const stripe = new Stripe(secretKey, {
      timeout: 30000, // 30 seconds
      maxNetworkRetries: 3,
    });

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
    const keyLen = process.env.STRIPE_SECRET_KEY?.length || 0;
    return NextResponse.json(
      { error: 'Failed to initialize payment', details: message, keyLen },
      { status: 500 }
    );
  }
}
