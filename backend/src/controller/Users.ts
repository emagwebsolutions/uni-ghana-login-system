import { NextFunction, Request, Response } from 'express';
import User from '../model/User';
import Errors from '../error/Errors';

 const addUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { firstname, lastname, mobile, email, password, gender } = req.body;

    //All fields required
    if (Object.values(req.body).length < 6) {
      return next(new Errors('All fields required!', 400));
    }

    const reg = await User.create({
      firstname,
      lastname,
      mobile,
      email,
      password,
      gender, 
    });

    //reg.save();

    res.json({
      success: true,
      message: reg,
    });
  } catch (err) {
    next(err);
  }
};


export default addUser
