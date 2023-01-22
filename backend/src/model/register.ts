import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const register = new mongoose.Schema({
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

register.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);

  next();
});

const registration = mongoose.model('Register', register);

export default registration;
