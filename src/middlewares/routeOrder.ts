import express from 'express';
import OrderController from '../controllers/OrderController';

const routeOrder = express.Router();

const Order = new OrderController();

routeOrder
  .route('/')
  .get(Order.findAll);

export default routeOrder;