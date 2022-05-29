import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import UNAUTHORIZEDError from 'middlewares/errors/NOT_FOUNDError';
import NoTFoundError from 'middlewares/errors/UNAUTHORIZEDError';
import userService from 'routes/user/user.service';

const secret = '123456789ndesk';
export const generateToken = (_id: string) => {
  const JWTToken = jwt.sign(
    {
      _id,
    },
    secret,
  );
  return JWTToken;
};

export const verifyToken = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const token = req.headers.authorization;

  if (!token) {
    throw new UNAUTHORIZEDError('access Unauthorized');
  }

  jwt.verify(token, secret, async (err, decoded) => {
    if (err) {
      throw new UNAUTHORIZEDError('access Unauthorized');
    }

    const user = await userService.getUserById(decoded._id);
    if (!user) {
      throw new NoTFoundError('user not found');
    }
    req.currentUser = user;
    next();
  });
};
