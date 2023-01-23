import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import connection from './config/connect';
import routes from './routes';
import handleErrors from './error/handleErrors';
import passport from 'passport';
import User from './model/User';
var JwtStrategy = require('passport-jwt').Strategy,
ExtractJwt = require('passport-jwt').ExtractJwt;


dotenv.config({ path: path.resolve(__dirname, '../config.env') });

const app = express();

const PORT = process.env.PORT || 8000;

connection();



passport.use(
  new JwtStrategy({
    jwtFromRequest : ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey : 'emmanuelagyemang'

  }, function (jwt_payload: any, done: any) {
    console.log(jwt_payload)
    User.findOne({ id: jwt_payload.user_id }, function (err: any, user: any) {
      if (err) {
        return done(err, false);
      }
      if (user) {
        return done(null, user);
      } else {
        return done(null, false);
        // or you could create a new account
      }
    });
  })
);



app.use(passport.initialize());
app.use(express.json());
app.use(routes);
app.use(handleErrors);

const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

process.on('unhandledRejection', (err: { message: string }, promise) => {
  console.log(err.message);
  server.close(() => process.exit(1));
});
