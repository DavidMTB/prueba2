import { Router } from 'express';
import { addToCart, getCart } from '../controllers/cart.controller';
import { authMiddleware } from '../middlewares/auth.middleware'; // Importar middleware de autenticación

const router = Router();

// Proteger rutas con authMiddleware
router.post('/add', authMiddleware, addToCart);
router.get('/current', authMiddleware, getCart); // ¡CAMBIAR LA RUTA!

export default router;