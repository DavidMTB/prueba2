import { Router } from 'express';
import { authMiddleware } from '../middlewares/auth.middleware';
import { confirmarCompra } from '../controllers/checkout.controller';

const router = Router();

router.post('/confirmar', authMiddleware, confirmarCompra);

export default router;
