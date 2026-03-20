import { Request, Response } from 'express';
import { authService } from '../services/authService';

export class AuthController {
  login = (req: Request, res: Response): void => {
    try {
      const { shop } = req.query;
      if (!shop) {
        res.status(400).json({ success: false, error: 'Missing shop parameter' });
        return;
      }

      const installUrl = authService.getInstallUrl(shop as string);
      res.redirect(installUrl);
    } catch (err) {
      console.error('Error in login:', err);
      res.status(500).json({ success: false, error: 'Login failed' });
    }
  };

  callback = async (req: Request, res: Response): Promise<void> => {
    try {
      const { shop, code, hmac } = req.query;
      if (!shop || !code || !hmac) {
        res.status(400).json({ error: 'Missing required parameters' });
        return;
      }

      if (!authService.verifyHmac(req.query, hmac as string)) {
        res.status(401).json({ error: 'HMAC verification failed' });
        return;
      }

      const token = await authService.exchangeCodeForToken(shop as string, code as string);
      console.log(`[Auth] App installed for shop: ${shop}`);

      res.redirect(`/?shop=${shop}&token=${token || 'demo'}`);
    } catch (err) {
      console.error('[Auth] Callback error:', err);
      res.status(500).json({ error: 'Authentication failed' });
    }
  };

  status = (_req: Request, res: Response): void => {
    res.json({
      authenticated: true,
      mode: 'setup',
      shop: 'demo-store.myshopify.com',
      message: 'Running in setup mode',
    });
  };
}

export const authController = new AuthController();
