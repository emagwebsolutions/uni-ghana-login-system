import { NextFunction, Request, Response } from 'express'
import Register from '../model/register'
import Errors from '../error/Errors';

export const addUser = async (req: Request, res: Response,next: NextFunction) => {

  try {

 next(new Errors('Fake error', 404))

    // const reg = await new Register({
    //   firstname: 'Bernice',
    //   lastname: 'Agyemang',
    //   mobile: '0550767765',

    // });

    // reg.save();

  } catch (err) {
    next(err)
  }

  
};
