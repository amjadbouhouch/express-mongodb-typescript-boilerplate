import bcrypt from 'bcrypt';
import { SALT_ROUND } from './constants';

export const cryptPassword = (password: string): string => {
  const salt = bcrypt.genSaltSync(SALT_ROUND);
  return bcrypt.hashSync(password, salt);
};
//
export const comparePassword = (password: string, hash: string): boolean =>
  bcrypt.compareSync(password, hash);
