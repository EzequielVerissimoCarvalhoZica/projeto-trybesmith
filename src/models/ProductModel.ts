import { Pool } from 'mysql2/promise';
import IProduct from '../interfaces/ProductInterface';

class ProductModel {
  private connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  findAll = async (): Promise<IProduct[]> => {
    const query = 'SELECT * FROM Trybesmith.Products;';

    const result = await this.connection.execute(query);

    const [products] = result; 

    return products as IProduct[];
  };

  create = async (): Promise<void> => {};
}

export default ProductModel;