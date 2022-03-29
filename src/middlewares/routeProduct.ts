import express from 'express';
import ProductController from '../controllers/ProductController';
import validateProduct from './validateProduct';

const routeProduct = express.Router();

const Products = new ProductController();

routeProduct
  .route('/')
  .get(Products.findAll)
  .post(validateProduct, Products.create);

export default routeProduct;