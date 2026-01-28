import { NextResponse } from 'next/server';
import { getStripe, CONSULTATION_PRICE } from '@/lib/stripe';

export const dynamic = 'force-dynamic';

export async function POST() {
  try {
    const stripe = getStripe();
    if (!stripe) {
      return NextResponse.json(
        { error: 'Stripe not configured' },
        { status: 500 }
      );
    }

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
    return NextResponse.json(
      { error: 'Failed to initialize payment' },
      { status: 500 }
    );
  }
}
