import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
});

const courseSchema = new mongoose.Schema({
  course_id: Number,
  title: String,
  short_desc: String,
  student_num: String,
  reviews: Number,
  creator: String,
  language: String,
  last_update: String,
  price: String,
  duration: String,
  long_desc: String,
  timestamp: Date
});

export const User = mongoose.model('User', userSchema);
export const Course = mongoose.model('Course', courseSchema);