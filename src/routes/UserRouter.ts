import express from 'express';
import UserController from '../controllers/UserController';
import validateUsernameUsers from '../middlewares/validateUsernameUsers';
import validateLevelUsers from '../middlewares/validateLevelUsers';
import validatePasswordUser from '../middlewares/validatePasswordUser';
import validateClasseUsers from '../middlewares/validateClasseUsers';

const router = express.Router();

router
  .post(
    '/users',
    validateUsernameUsers,
    validateLevelUsers,
    validatePasswordUser,
    validateClasseUsers,
    UserController.registerUser,
  );

export default router;