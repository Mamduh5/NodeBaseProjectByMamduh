import * as userModel from '../models/userModel.js';
import argon2 from 'argon2';
import { signToken } from '../utils/jwt.js';
import NotFoundError from '../errors/notFoundError.js';

export async function loginUser(email, password) {
  const user = await userModel.findUserByEmail(email);
  if (!user) throw new NotFoundError('User not found');

  const isMatch = await argon2.verify(user.password, password);
  if (!isMatch) throw new Error('Invalid password');

  return signToken({ id: user.id, email: user.email });
}
