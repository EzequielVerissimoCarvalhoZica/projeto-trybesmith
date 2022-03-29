import express from 'express';

const routeOrder = express.Router();

routeOrder
  .route('/')
  .post();

export default routeOrder;