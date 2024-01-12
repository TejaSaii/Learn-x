import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
});

const courseSchema = new mongoose.Schema({
  title: String,
  img: String,
  description: String,
  price: Number,
});

export const User = mongoose.model('User', userSchema);
export const Course = mongoose.model('Course', courseSchema);