import { Router } from 'express';
import { newOrder } from '../controllers/orderController.js';
import { validateOrderPost } from '../middlewares/validateOrderPost.js';

const router = Router();

router.post('/order', validateOrderPost, newOrder);

export default router;
