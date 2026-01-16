import { Router } from 'express';
import {
  listarVentas,
  detalleVenta
} from '../controllers/sales.controller';
import { adminOnly } from '../middlewares/admin.middleware';

const router = Router();

router.get('/', adminOnly, listarVentas);
router.get('/:id', adminOnly, detalleVenta);

export default router;
