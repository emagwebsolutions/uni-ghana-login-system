import { Request, Response, NextFunction } from 'express';
import Errors from '../error/Errors';
import User from '../model/User';

const Login = async (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;

  //All fields required
  if (!email && !password) {
    return next(new Errors('All fiedls required!', 400));
  }

  try {
    const user = await User.findOne({ email }).select('+password');

    if (user) {
      const comppwd = await user.comparePasswords(password);
      if (comppwd) {
        const token = user.jwtToken();
        res.status(200).json({
          success: true,
          token,
        });
      } else { 
        return next(new Errors('Invalid login details!', 400));
      }
    }
    else { 
      return next(new Errors('You are not registered !', 400));
    }
  } catch (err) {
    next(err);
  }
};

export default Login;
