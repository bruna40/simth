import { Router } from 'express';
import UserController from '../controllers/UserController';

const router = Router();

router
  .get('/users', UserController.register);

export default router;