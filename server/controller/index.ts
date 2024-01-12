import { z } from 'zod';
import { Request, Response } from 'express';

function userSignUp(req: Request, res: Response) {
  const userInputProps = z.object({
    email: z.string().email(),
    password: z.string().min(5).max(20),
  });

  const parsedUserInput = userInputProps.safeParse(req.body);
  if (!parsedUserInput.success) {
    return res.status(411).json({ message: parsedUserInput.error.message });
  }

  const { email, password } = parsedUserInput.data;
  const user = User.findOne({email});
  if(user){
    return res.status(403).json({mes: 'User already exists'});
  }
  else {
    //save it in db
    //create new user
    //.save()
  }

}

// function adminSignUp(req: Request, res: Response) {
//   const userInputProps = z.object({
//     email: z.string().email(),
//     password: z.string().min(5).max(20),
//   })
// }