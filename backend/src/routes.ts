import express from 'express';
import Login from './controller/Login';
import AddUser from './controller/Users';
import passport from 'passport';
import Dashboard from './controller/Dashboard';
import Resetpassword from './controller/Resetpassword';

const routes = express.Router();

routes.post('/register', AddUser);

routes.post('/login', Login);

routes.post(
  '/dashboard',
  passport.authenticate('jwt', { session: false }),
  Dashboard
);

routes.post('/resetpassword', Resetpassword);

export default routes;
