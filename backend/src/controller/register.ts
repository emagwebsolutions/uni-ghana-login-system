import { Request, Response } from 'express'
import Register from '../model/register'

export const addUser = async (req: Request, res: Response) => {
  try {

    const reg = await new Register({
      firstname: 'Bernice',
      lastname: 'Agyemang',
      mobile: '0550767765',
      email: 'me@gmail.com',
      password: 'sdfsfdsfdsfdsf',
      gender: 'Male'
    });

    reg.save();

    res.json({
      success: true,
      message: reg,
    });

  } catch (err) {
    console.log(err)
  }
};
