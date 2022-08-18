import { Router } from 'express';
import {
  newOrder,
  getOrders,
  getOrdersId,
} from '../controllers/orderController.js';
import { validateOrderPost } from '../middlewares/validateOrderPost.js';

const router = Router();

router.post('/order', validateOrderPost, newOrder);
router.get('/orders', getOrders);
router.get('/orders/:id', getOrdersId);

export default router;
