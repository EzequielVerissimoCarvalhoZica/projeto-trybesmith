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

  create = async ({ name, amount }: IProduct): Promise<IProduct> => {
    const result = await this.model.create({ name, amount });

    return result;
  };
}

export default ProductService;