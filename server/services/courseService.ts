import { ICourse } from "../interfaces";
import { Course } from "../db";

async function getCourses(): Promise<ICourse[]> {
  try {
    const courses: ICourse[] = await Course.find();
    return courses;
  }
  catch (err) {
    throw new Error("Unable to find courses: "+err);
  }
}


async function getCourse(courseId: number){
  try{
    const course = await Course.find({course_id: courseId});
    return course;
  }
  catch(err){
    throw new Error("Unable to find course: "+err);
  }
}

export default {getCourses, getCourse}