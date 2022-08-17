import { Router } from 'express';
import { newCake } from '../controllers/cakeController.js';
import { validateCakePost } from '../middlewares/validateCakePost.js';

const router = Router();

router.post('/cakes', validateCakePost, newCake);

export default router;
