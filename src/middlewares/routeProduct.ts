import express from 'express';
import ProductController from '../controllers/ProductController';
import validateProduct from './validateProduct';

const routeProduct = express.Router();

const products = new ProductController();

routeProduct
  .route('/')
  .get(products.findAll)
  .post(validateProduct, products.create);

export default routeProduct;