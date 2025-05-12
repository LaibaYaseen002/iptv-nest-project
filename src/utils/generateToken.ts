import * as jwt from 'jsonwebtoken';
import { env } from '../config/env';  

export const generateToken = (user: any): string => {
  return jwt.sign(
    { id: user.id, email: user.email },
    env.jwtSecret,  
    { expiresIn: '7d' }  
    
  );
};
