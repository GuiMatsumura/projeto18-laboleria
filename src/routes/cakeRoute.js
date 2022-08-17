import { Router } from 'express';
import { newCake } from '../controllers/cakeController.js';
import { validateCakePost } from '../middlewares/validateCakePost.js';

const router = Router();

router.post('/cake', validateCakePost, newCake);

export default router;
