import Stripe from 'stripe';

const apiKey = process.env.STRIPE_SECRET_KEY || 'sk_test_mock';

export const stripe = new Stripe(apiKey, {
  apiVersion: '2025-01-27.acacia' as any,
});

export class StripeService {
  async createCheckoutSession(userId: string, email: string, isTrial = false) {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'subscription',
      customer_email: email,
      client_reference_id: userId,
      subscription_data: isTrial ? {
        trial_period_days: 30,
      } : undefined,
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: isTrial ? 'Growth Plan (30-Day Free Trial)' : 'Growth Plan Subscription',
              description: isTrial ? 'Full access to all growth features. No charge for the first 30 days.' : 'Scale your store with advanced analytics.',
            },
            unit_amount: 4900, // $49.00
            recurring: { interval: 'month' },
          },
          quantity: 1,
        },
      ],
      success_url: `${process.env.HOST || 'http://localhost:5173'}/?success=true&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.HOST || 'http://localhost:5173'}/plans?canceled=true`,
    });

    return session;
  }

  async createProductCheckoutSession(userId: string, email: string, items: any[]) {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      customer_email: email,
      client_reference_id: userId,
      line_items: items.map(item => ({
        price_data: {
          currency: 'usd',
          product_data: {
            name: item.title,
            images: item.image ? [item.image] : [],
          },
          unit_amount: Math.round(item.price * 100), // convert to cents
        },
        quantity: item.quantity,
      })),
      success_url: `${process.env.HOST || 'http://localhost:5173'}/search?success=true`,
      cancel_url: `${process.env.HOST || 'http://localhost:5173'}/search?canceled=true`,
    });

    return session;
  }
}

export const stripeService = new StripeService();
