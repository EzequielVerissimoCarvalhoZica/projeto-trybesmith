import connection from '../models/connection';
import OrderModel from '../models/OrderModel';

class OrderService {
  private model: OrderModel;

  constructor() {
    this.model = new OrderModel(connection);
  }

  findAll = async () => {
    const result = await this.model.findAll();
    
    const orders = result.map((ordel) => ({ ...ordel, products: [ordel.products] }));
    return orders;
  };

  create = async (): Promise<void> => {};
}

export default OrderService;