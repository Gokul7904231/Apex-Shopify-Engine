import crypto from 'crypto';

const SHOPIFY_API_KEY = process.env.SHOPIFY_API_KEY || 'demo_api_key';
const SHOPIFY_API_SECRET = process.env.SHOPIFY_API_SECRET || 'demo_api_secret';
const SCOPES = 'read_products,read_orders,read_customers';
const HOST = process.env.HOST || 'http://localhost:3000';

export class AuthService {
  getInstallUrl(shop: string): string {
    const nonce = crypto.randomBytes(16).toString('hex');
    const redirectUri = `${HOST}/auth/callback`;
    return `https://${shop}/admin/oauth/authorize?client_id=${SHOPIFY_API_KEY}&scope=${SCOPES}&redirect_uri=${redirectUri}&state=${nonce}`;
  }

  verifyHmac(query: any, hmac: string): boolean {
    const params = { ...query };
    delete params.hmac;
    const sortedParams = Object.keys(params).sort().map((k) => `${k}=${params[k]}`).join('&');
    const hash = crypto.createHmac('sha256', SHOPIFY_API_SECRET).update(sortedParams).digest('hex');
    return hash === hmac;
  }

  async exchangeCodeForToken(shop: string, code: string): Promise<string | undefined> {
    const tokenResponse = await fetch(`https://${shop}/admin/oauth/access_token`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        client_id: SHOPIFY_API_KEY,
        client_secret: SHOPIFY_API_SECRET,
        code,
      }),
    });

    const tokenData = await tokenResponse.json() as { access_token?: string };
    return tokenData.access_token;
  }
}

export const authService = new AuthService();
