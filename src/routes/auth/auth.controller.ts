import { NextFunction, Request, Response } from 'express';
import BAD_REQUESTError from 'middlewares/errors/BAD_REQUESTError';
import UNAUTHORIZEDError from 'middlewares/errors/NOT_FOUNDError';
import NoTFoundError from 'middlewares/errors/UNAUTHORIZEDError';
import UserModel from 'models/UserModel';
import userService from 'routes/user/user.service';
import { comparePassword } from '../../utils/functions';
import { generateToken } from '../../utils/jwt';

// const saltRounds = 10;
const authController = {
  signUp: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = await UserModel.findOne({ email: req.body.email });
      if (user) {
        throw new BAD_REQUESTError('user already exist');
      }
      await userService.createUser(req.body.email, req.body.password);
      return res.status(200).json({ message: 'User created successfully' });
    } catch (error) {
      return next(error);
    }
  },
  login: async (req: Request, res: Response, next: NextFunction) => {
    try {
      console.log(req.body);
      const user = await UserModel.findOne({ email: req.body.email });
      if (!user) {
        throw new NoTFoundError('user not found');
      }

      const isPasswordValid = await comparePassword(
        req.body.password,
        user.password,
      );
      if (!isPasswordValid) {
        throw new UNAUTHORIZEDError('access Unauthorized');
      }
      const token = generateToken(user._id);
      console.log(token);
      return res.status(200).send(token);
    } catch (error) {
      return next(error);
    }
  },
};

export default authController;
