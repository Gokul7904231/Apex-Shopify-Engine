import crypto from 'crypto';

const SHOPIFY_API_SECRET = process.env.SHOPIFY_API_SECRET || 'demo_api_secret';

export class WebhookService {
  verifyWebhook(hmac: string | undefined, body: any): boolean {
    if (!hmac) return false;
    const bodyStr = JSON.stringify(body);
    const hash = crypto.createHmac('sha256', SHOPIFY_API_SECRET).update(bodyStr).digest('base64');
    return crypto.timingSafeEqual(Buffer.from(hash), Buffer.from(hmac));
  }

  async handleOrderCreated(orderId: string) {
    console.log('[Webhook] Order created:', orderId);
    // In production: update analytics, recommendation graph, cache
  }

  async handleProductUpdated(productId: string) {
    console.log('[Webhook] Product updated:', productId);
    // In production: update search index, invalidate cache
  }

  async handleAppUninstalled(domain: string) {
    console.log('[Webhook] App uninstalled for shop:', domain);
  }
}

export const webhookService = new WebhookService();
