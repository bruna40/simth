import { Router } from 'express';
import UserController from '../controllers/UserController';

const router = Router();

router
  .get('/', UserController.register);

export default router;