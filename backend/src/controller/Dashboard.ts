import { Request, Response } from 'express';

const Dashboard = (req: Request, res: Response) => {
  const user = req.user;

  res.status(200).json({
    success: true,
    user,
  });
  
};

export default Dashboard;
