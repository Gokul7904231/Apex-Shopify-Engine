import { Router } from 'express';
import { authController } from '../controllers/authController';

const router = Router();

router.get('/', authController.login);
router.get('/callback', authController.callback);
router.get('/status', authController.status);

export default router;
