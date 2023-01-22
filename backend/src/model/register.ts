import mongoose from "mongoose";

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
  },
  email: String,
  password: {
    type: String,
    required: [true, 'Password field required!'],
    minLength: 6,
  },
  gender: {
    type: String,
    required: [true, 'Gender field required!'],
  },
});

const registration = mongoose.model('Register', register);

export default registration;
