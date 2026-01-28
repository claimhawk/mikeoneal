import Stripe from 'stripe';

// Lazy initialization to avoid build-time errors
let stripeInstance: Stripe | null = null;

export function getStripe() {
  if (!stripeInstance && process.env.STRIPE_SECRET_KEY) {
    stripeInstance = new Stripe(process.env.STRIPE_SECRET_KEY);
  }
  return stripeInstance;
}

export const CONSULTATION_PRICE = 19900; // $199 in cents
