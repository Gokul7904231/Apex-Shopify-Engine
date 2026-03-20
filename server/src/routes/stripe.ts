import { Router } from 'express';
import { requireAuth, AuthenticatedRequest } from '../middleware/authMiddleware';
import { stripeService, stripe } from '../services/stripe.service';
import { prisma } from '../data/db';
import express from 'express';

export const stripeRouter = Router();
export const webhookRouter = Router();

// POST /api/stripe/create-checkout-session
stripeRouter.post('/create-checkout-session', requireAuth, async (req: AuthenticatedRequest, res) => {
  try {
    const user = req.user;
    if (!user || !user.uid) {
      return res.status(401).json({ success: false, error: 'User not authenticated' });
    }

    if (!process.env.STRIPE_SECRET_KEY) {
      console.error('[Stripe] Missing STRIPE_SECRET_KEY');
      return res.status(500).json({ 
        success: false, 
        error: 'Stripe configuration missing. Please add STRIPE_SECRET_KEY to .env' 
      });
    }

    const { uid, email } = user;
    const { items, isTrial } = req.body;

    let session;
    if (items && Array.isArray(items) && items.length > 0) {
      // Product payment
      session = await stripeService.createProductCheckoutSession(uid, email || '', items);
    } else {
      // Subscription (with optional trial)
      console.log(`[Stripe] Creating subscription session (Trial: ${!!isTrial}) for ${email}`);
      session = await stripeService.createCheckoutSession(uid, email || '', !!isTrial);
    }
    
    if (!session || !session.url) {
      throw new Error('Failed to generate checkout URL');
    }

    res.json({ success: true, data: { url: session.url } });
  } catch (error: any) {
    console.error('Error creating checkout session:', error);
    res.status(500).json({ 
      success: false, 
      error: error.message || 'Internal server error' 
    });
  }
});

// POST /api/webhooks/stripe
// Must use raw body for stripe signature verification
webhookRouter.post('/stripe', express.raw({ type: 'application/json' }), async (req, res) => {
  const sig = req.headers['stripe-signature'];
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!sig || !webhookSecret) {
    return res.status(400).send('Webhook secret or signature missing');
  }

  let event;
  try {
    event = stripe.webhooks.constructEvent(req.body, sig, webhookSecret);
  } catch (err: any) {
    console.error(`Webhook signature verification failed: ${err.message}`);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  try {
    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object as any;
        const userId = session.client_reference_id;
        const customerId = session.customer;
        const subscriptionId = session.subscription;

        if (userId && subscriptionId && customerId) {
          await prisma.subscription.create({
            data: {
              userId,
              stripeCustomerId: customerId,
              subscriptionId: subscriptionId,
              status: 'active'
            }
          });
        }
        break;
      }
      case 'invoice.paid': {
        const invoice = event.data.object as any;
        const subscriptionId = invoice.subscription;
        if (subscriptionId) {
           await prisma.subscription.updateMany({
             where: { subscriptionId },
             data: { status: 'active' }
           });
        }
        break;
      }
      case 'customer.subscription.updated': {
        const subscription = event.data.object as any;
        await prisma.subscription.updateMany({
           where: { subscriptionId: subscription.id },
           data: { status: subscription.status }
        });
        break;
      }
      default:
        console.log(`Unhandled stripe event type ${event.type}`);
    }
  } catch (e) {
    console.error('Webhook error processing event:', e);
    return res.status(500).send('Webhook handler failed');
  }

  res.send();
});
