import { Router } from 'express';
import cakeRout from './cakeRoute.js';
import clientRout from './clientRoute.js';

const router = Router();

router.use(cakeRout);
router.use(clientRout);

export default router;
