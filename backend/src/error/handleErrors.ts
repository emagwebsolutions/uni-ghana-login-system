import { Request, Response, NextFunction } from 'express';
import Errors from './Errors';

const handleErrors = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let error = { ...err };
  error.message = err.message;

  if (err.name === 'ValidationError') {
    const message = Object.values(err.errors).map((val: any) => val.message);

    error = new Errors(message, 400);
  }

  if (err.code === 11000) {
    error = new Errors('Avoid duplicate values!', 400);
  }

  res.status(error.statusCode || 500).json({
    success: false,
    message: error.message || 'Server error',
  });
};

export default handleErrors;
