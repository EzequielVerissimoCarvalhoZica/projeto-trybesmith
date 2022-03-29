import { Request, Response } from 'express';

class OrderController {
  // constructor() {}

  create = async (_req:Request, res: Response): Promise<void> => {
    res.end();
  };
}

export default OrderController;