import { Pool } from 'mysql2/promise';
import IOrder from '../interfaces/OrderInterface';

class OrderModel {
  private connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  findAll = async (): Promise<IOrder[]> => {
    const query = `SELECT 
    Orders.id, Orders.userId, Products.id AS products
  FROM
    Trybesmith.Orders
      INNER JOIN
    Trybesmith.Products ON Products.orderId = Orders.id
  GROUP BY Products.id;`;

    const [result] = await this.connection.execute(query);

    return result as IOrder[];
  };

  create = async (): Promise<void> => {};
}

export default OrderModel;