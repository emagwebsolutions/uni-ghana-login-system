import { Request, Response, NextFunction } from 'express';
import Errors from '../error/Errors';
import User from '../model/User'

const Login = async (req: Request, res: Response, next: NextFunction) => {

  const { email, password } = req.body;

  //All fields required
  if (!email && !password) {
    return next(new Errors('All fiedls required!', 400));
  }

  try{
    const user = await User.findOne({email}).select('+password')

    if(user){
       const comppwd = user.comparePasswords(user.password)
       if(comppwd){
        res.status(200).json({
            success: true, 
            message: user
        })
       }
    }


  }
  catch(err){
    next(err)
  }


};

export default Login;
