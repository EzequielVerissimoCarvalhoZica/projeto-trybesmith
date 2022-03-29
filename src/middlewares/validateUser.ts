import { NextFunction, Request, Response } from 'express';
import joiValidateUser from '../schemas/joiValidateUser';

const validateUser = (req: Request, res: Response, next: NextFunction) => {
  const { username, classe, level, password } = req.body;

  const { error } = joiValidateUser.validate({ username, classe, level, password });

  if (error) {
    const [code, message] = error.message.split('|');

    return res.status(Number(code)).json({ error: message });
  }

  return next();
};

export default validateUser;