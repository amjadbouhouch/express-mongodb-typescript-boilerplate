import BaseError from './BaseError';
import { Request, Response } from 'express';
const errorhandler = {
  logError: (err: any) => {
    console.error(err);
  },

  logErrorMiddleware: (err: Error, req: Request, res: Response, next: any) => {
    errorhandler.logError(err);
    next(err);
  },

  returnError: (err: any, req: Request, res: Response, next: any) => {
    errorhandler.logError(err);
    res.status(err.statusCode || 500).json(err.message);
  },

  isOperationalError: (error: any) => {
    if (error instanceof BaseError) {
      return error.isOperational;
    }
    return false;
  },
};

export default errorhandler;
