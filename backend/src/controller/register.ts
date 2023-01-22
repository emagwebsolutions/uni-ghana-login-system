import { NextFunction, Request, Response } from 'express';
import Register from '../model/register';
import Errors from '../error/Errors';

export const addUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { firstname, lastname, mobile, email, password, gender } = req.body;

    //All fields required 
    if(Object.values(req.body).length < 6){
      return next(new Errors('All fields required!', 400))
    }


    const reg = await new Register({
      firstname,
      lastname,
      mobile,
      email,
      password,
      gender,
    });

    reg.save();

    res.json({
      success: true,
      message: reg,
    });
  } catch (err) {
    next(err);
  }
};
