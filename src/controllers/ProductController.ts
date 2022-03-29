import { Request, Response } from 'express';
import ProductService from '../services/ProductService';

class ProductController {
  service: ProductService;

  constructor() {
    this.service = new ProductService();
  }

  findAll = async (_req:Request, res: Response) => {
    const products = await this.service.findAll();
  
    res.status(200).json(products);
  };

  create = async (_req:Request, res: Response): Promise<void> => {
    res.end();
  };
}

export default ProductController;