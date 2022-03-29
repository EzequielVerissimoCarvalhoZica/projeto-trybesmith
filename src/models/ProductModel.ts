import { Pool, ResultSetHeader } from 'mysql2/promise';
import IProduct from '../interfaces/ProductInterface';

class ProductModel {
  private connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  findAll = async (): Promise<IProduct[]> => {
    const query = 'SELECT * FROM Trybesmith.Products;';

    const [result] = await this.connection.execute(query);

    return result as IProduct[];
  };

  create = async ({ name, amount }: IProduct): Promise<IProduct> => {
    const query = 'INSERT INTO Trybesmith.Products (name, amount) VALUES(?, ?);';

    const [result] = await this.connection.execute<ResultSetHeader>(query, [name, amount]);

    return { id: result.insertId, name, amount };
  };
}

export default ProductModel;