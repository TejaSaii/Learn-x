import { NextFunction, Request, Response } from "express"
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv'

dotenv.config();

export function authenticateJwt(req: Request, res: Response, next: NextFunction){
  const authorization = req.headers.authorization;
  if(!authorization){
    return res.sendStatus(401);
  }
  const token: string = authorization.split(' ')[1];
  jwt.verify(token, process.env.SECRET as string, (err: any, payload) => {
    if(err){
      return res.sendStatus(403);
    }
    if(!payload || typeof payload == 'string'){
      return res.sendStatus(403);
    }
    req.headers.userId = payload.id;
    next();
  });
}