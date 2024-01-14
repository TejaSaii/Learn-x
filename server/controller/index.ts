import { z } from 'zod';
import { Request, Response } from 'express';
import { User } from '../db';
import userService from '../services/userService';
import courseService from '../services/courseService';
import jwt from 'jsonwebtoken';


const userInputProps = z.object({
  email: z.string().email(),
  password: z.string().min(5).max(20),
});

async function userSignUp(req: Request, res: Response) {

  const parsedUserInput = userInputProps.safeParse(req.body);
  if (!parsedUserInput.success) {
    return res.status(411).json({ message: parsedUserInput.error.message });
  }

  const { email, password } = parsedUserInput.data;
  try {
    const user = await User.findOne({ email });
    if (user) {
      return res.status(403).json({ mes: 'User already exists' });
    }
    else {
      const newUser = await userService.saveUser({ email, password });
      const token = jwt.sign({ id: newUser._id }, 'Secret', { expiresIn: '1h' });
      return res.json({
        message: 'User created successfully', token
      });
    }
  }
  catch (err) {
    return res.status(403).json({ message: 'User SignUp failed: ' + err });
  }
}

//create userLogin function
async function userLogin(req: Request, res: Response) {
  const parsedUserInput = userInputProps.safeParse(req.body);
  if (!parsedUserInput.success)
    return res.status(411).json({ message: parsedUserInput.error.message });

  const user = parsedUserInput.data;
  try {
    const existingUser = await userService.getUser(user);
    if (!existingUser)
      return res.status(403).json({ message: 'Invalid Credentials, please try again' });

    const token = jwt.sign({ id: existingUser._id }, 'Secret', { expiresIn: '1h' });

    return res.json({ message: 'User login successfull', token });
  }
  catch (err) {
    return res.status(403).json({ message: 'User Login failed: ' + err });
  }
}

async function getCourses(req: Request, res: Response) {
  try {
    const courses = await courseService.getCourses();
    if(!courses){
      return res.status(400).json({message: 'Unable to find Courses'});
    }
    return res.json({results: courses});
  }
  catch(err){
    return res.status(404).json({message: err});
  }
}

async function getCourseById(req: Request, res: Response){
  try{
    const courseId: number = parseInt(req.params.id);
    const course = await courseService.getCourse(courseId);
    if(!course || course.length === 0){
      return res.status(400).json({message: 'Unable to find course'});
    }
    return res.json({result: course});
  }
  catch(err){
    return res.status(404).json({message: err});
  }
}

async function getEmail(req: Request, res: Response){
  const userId: string = req.headers.userId as string;
  try{
    const user = await userService.getUserById(userId);
    if(!user)
      return res.status(400).json({message: 'User not found'});
    const email = user.email;
    return res.json({email});
  }
  catch(err){
    if(err instanceof Error)
      return res.status(400).json({error: err.message});
    return res.status(500).json({message: 'Internal Server Error'});
  }
}


export default { userSignUp, userLogin, getCourses, getCourseById , getEmail};
