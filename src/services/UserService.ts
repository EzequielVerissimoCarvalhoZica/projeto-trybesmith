import jwt from 'jsonwebtoken';
import IUser from '../interfaces/UserIterface';
import connection from '../models/connection';
import UserModel from '../models/UserModel';

class UserService {
  private model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  create = async ({ username, classe, level, password }: IUser): Promise<string> => {
    await this.model.create({ username, classe, level, password });

    const SECRET = process.env.JWT_SECRET || 'secretRuim';
    const jwtConfig = { expiresIn: '1d' };

    const token = jwt.sign({ data: { username, classe } }, SECRET as string, jwtConfig);

    return token;
  };
}

export default UserService;