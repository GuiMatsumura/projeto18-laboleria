import { Router } from 'express';
import { newClient } from '../controllers/clientController.js';
import { validateClientPost } from '../middlewares/validateClientPost.js';

const router = Router();

router.post('/clients', validateClientPost, newClient);

export default router;
