import express from 'express';
import ProductController from '../controllers/ProductController';

const routeProduct = express.Router();

const products = new ProductController();

routeProduct
  .route('/')
  .get(products.findAll)
  .post();

export default routeProduct;