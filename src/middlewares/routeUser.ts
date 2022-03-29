import express from 'express';
import UserController from '../controllers/UserController';
import validateUser from './validateUser';

const routeUser = express.Router();

const User = new UserController();

routeUser
  .route('/')
  .post(validateUser, User.create);

export default routeUser;