import { Request, Response } from 'express';
import UserService from '../services/UserService';

class UserController {
  private service: UserService;

  constructor() {
    this.service = new UserService();
  }

  create = async (req:Request, res: Response) => {
    const { username, classe, level, password } = req.body;

    const token = await this.service.create({ username, classe, level, password });
    console.log('CONTROLLER');

    console.log(token);
    
    return res.status(201).json({ token });
  };
}

export default UserController;