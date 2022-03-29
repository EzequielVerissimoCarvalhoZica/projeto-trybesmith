import { Request, Response } from 'express';
import ProductService from '../services/ProductService';

class ProductController {
  private service: ProductService;

  constructor() {
    this.service = new ProductService();
  }

  findAll = async (_req:Request, res: Response) => {
    const products = await this.service.findAll();
  
    return res.status(200).json(products);
  };

  create = async (req:Request, res: Response) => {
    const { name, amount } = req.body;

    const products = await this.service.create({ name, amount });

    return res.status(201).json({ item: products });
  };
}

export default ProductController;