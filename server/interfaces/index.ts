export interface IUser {
  email: string;
  password: string;
}

export interface ICourse {
  course_id: number;
  title: string;
  short_desc: string;
  student_num: string;
  reviews: number;
  creator: string;
  language: string;
  last_update: string;
  price: string;
  duration: string;
  long_desc: string;
  timestamp: Date;
}