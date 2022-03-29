import { Request, Response } from 'express';

class UserController {
  // constructor() {}

  create = async (_req:Request, res: Response): Promise<void> => {
    res.end();
  };
}

export default UserController;