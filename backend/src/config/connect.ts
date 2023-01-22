import mongoose from "mongoose";

function conn() {
  mongoose.connect(
    `mongodb+srv://agengo:${process.env.MONGODB_PASSWORD}@cluster0.sx3ik8m.mongodb.net/?retryWrites=true&w=majority`
  );
}

export default conn;
