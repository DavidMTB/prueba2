import { Router } from 'express';
import { dashboard } from '../controllers/admin.controller';
import { adminOnly } from '../middlewares/admin.middleware';

const router = Router();

router.get('/dashboard', adminOnly, dashboard);

export default router;
