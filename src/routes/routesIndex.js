import { Router } from 'express';
import cakeRout from './cakeRoute.js';

const router = Router();

router.use(cakeRout);

export default router;
