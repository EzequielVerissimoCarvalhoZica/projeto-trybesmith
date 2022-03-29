import { Request, Response } from 'express';
import OrderService from '../services/OrderService';

class OrderController {
  private service: OrderService;

  constructor() {
    this.service = new OrderService();
  }
  
  findAll = async (req:Request, res: Response) => {
    const orders = await this.service.findAll();

    return res.status(200).json(orders);
  };

  create = async (_req:Request, res: Response) => {
    res.end();
  };
}

export default OrderController;