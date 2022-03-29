import { Pool } from 'mysql2/promise';
import IUser from '../interfaces/UserIterface';

class UserModel {
  private connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  create = async ({ username, classe, level, password }: IUser): Promise<void> => {
    const query = `INSERT INTO Trybesmith.Users
    (username, classe, level, password) VALUES(?, ?, ?, ?);`;

    await this.connection.execute(query, [username, classe, level, password]);
  };
}

export default UserModel;