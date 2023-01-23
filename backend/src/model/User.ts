import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { idText } from 'typescript';

const User = new mongoose.Schema({
  firstname: {
    type: String,
    require: [true, 'Firstname required!'],
  },
  lastname: {
    type: String,
    required: [true, 'Lastname required!'],
  },
  mobile: {
    type: String,
    required: [true, 'Mobile Phone required!'],
    maxLength: 10,
    unique: true,
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'Password field required!'],
    minLength: 6,
    select: false,
  },
  gender: {
    type: String,
    required: [true, 'Gender field required!'],
  },

  passwordresettoken: String,
  passwordresetexpiry: Date,
});

User.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);

  next();
});

User.methods.comparePasswords = async function (password: string) {
  const compare = await bcrypt.compare(password, this.password);
  return compare;
};

User.methods.jwtToken = function () {
  return jwt.sign({ user_id: this._id, email: this.email }, "emmanuelagyemang", {
    expiresIn: process.env.JWT_EXPIRES,
  });
};

const userschema: any = mongoose.model('User', User);

export default userschema;
