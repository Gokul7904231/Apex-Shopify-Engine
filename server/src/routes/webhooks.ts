import { Router } from 'express';
import { webhookController } from '../controllers/webhookController';

const router = Router();

router.post('/orders/create', webhookController.orderCreated);
router.post('/products/update', webhookController.productUpdated);
router.post('/app/uninstalled', webhookController.appUninstalled);

export default router;
