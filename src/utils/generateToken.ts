import * as jwt from 'jsonwebtoken';
import { env } from '../config/env'; // Make sure this file exists with the correct env variables.

export function generateToken(user: any): string {
  return jwt.sign({ id: user._id, email: user.email }, env.jwtSecret, {
    expiresIn: env.jwtexpiresIn,
  });
}
