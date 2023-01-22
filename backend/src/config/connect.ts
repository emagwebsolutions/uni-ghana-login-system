import mongoose from "mongoose";

function conn() {
  mongoose.connect(
    `mongodb://localhost:27017/loginsystem`
  );
}

export default conn;


// `mongodb+srv://agengo:${process.env.MONGODB_PASSWORD}@cluster0.sx3ik8m.mongodb.net/?retryWrites=true&w=majority`
