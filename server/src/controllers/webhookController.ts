import { Request, Response } from 'express';
import { webhookService } from '../services/webhookService';

export class WebhookController {
  orderCreated = async (req: Request, res: Response): Promise<void> => {
    try {
      await webhookService.handleOrderCreated(req.body?.id || 'demo');
      res.status(200).send('OK');
    } catch (err) { res.status(500).send('Error processing webhook'); }
  };

  productUpdated = async (req: Request, res: Response): Promise<void> => {
    try {
      await webhookService.handleProductUpdated(req.body?.id || 'demo');
      res.status(200).send('OK');
    } catch (err) { res.status(500).send('Error processing webhook'); }
  };

  appUninstalled = async (req: Request, res: Response): Promise<void> => {
    try {
      await webhookService.handleAppUninstalled(req.body?.domain || 'demo');
      res.status(200).send('OK');
    } catch (err) { res.status(500).send('Error processing webhook'); }
  };
}

export const webhookController = new WebhookController();
