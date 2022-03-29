import IProduct from '../interfaces/ProductInterface';
import connection from '../models/connection';
import ProductModel from '../models/ProductModel';

class ProductService {
  private model: ProductModel;

  constructor() {
    this.model = new ProductModel(connection);
  }

  findAll = async (): Promise<IProduct[]> => {
    const products = await this.model.findAll();

    return products as IProduct[];
  };

  create = async (): Promise<void> => {};
}

export default ProductService;