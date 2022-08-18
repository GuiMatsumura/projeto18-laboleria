import { Router } from 'express';
import {
  newClient,
  getClientsOrders,
} from '../controllers/clientController.js';
import { validateClientPost } from '../middlewares/validateClientPost.js';
import { validateClientGet } from '../middlewares/validateClientGet.js';

const router = Router();

router.post('/clients', validateClientPost, newClient);
router.get('/clients/:id/orders', validateClientGet, getClientsOrders);

export default router;
