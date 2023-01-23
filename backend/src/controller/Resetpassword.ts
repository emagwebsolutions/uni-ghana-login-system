import { Request, Response, NextFunction } from 'express';
import nodemailer from 'nodemailer';
import Errors from '../error/Errors';
import User from '../model/User';
import crypto from 'crypto';
import SECRET_TOKEN from '../config/secret';

const resetpassword = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email } = req.body;

  if (!email) {
    return next(new Errors('Email field required!', 400));
  }

  try {
    const user_email = await User.findOne({ email });
    if (user_email) {
      const resetToken = 'c517d1f64f0d4c592c68';

      const token = crypto
        .createHash('sha256')
        .update(resetToken)
        .digest('hex');

      

      user_email.passwordReset(token, time);

      User.save();

      res.status(200).json({
        success: true,
        message: 'Password reset',
      });
    } else {
      return next(new Errors('Incorrect email!', 400));
    }
  } catch (err) {
    next(err);
  }
};

export default resetpassword;
