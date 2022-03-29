import express from 'express';

const routeUser = express.Router();

routeUser
  .route('/')
  .post();

export default routeUser;