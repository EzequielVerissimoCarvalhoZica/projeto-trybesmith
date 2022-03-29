import { NextFunction, Request, Response } from 'express';
import joiValidateProduct from '../schemas/joiValidateProduct';

const validateProduct = (req: Request, res: Response, next: NextFunction) => {
  const { name, amount } = req.body;

  const { error } = joiValidateProduct.validate({ name, amount });

  if (error) {
    const [code, message] = error.message.split('|');

    return res.status(Number(code)).json({ error: message });
  }

  return next();
};

export default validateProduct;