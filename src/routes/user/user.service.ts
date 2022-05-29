import UserModel from 'models/UserModel';
import { cryptPassword } from 'utils/functions';

const userService = {
  createUser: async (email: string, password: string) => {
    const hashedPassword = await cryptPassword(password);
    const user = new UserModel({
      fullName: 'Joe Doe',
      email,
      password: hashedPassword,
    });
    return user.save();
  },
  getUserById: async (id: string) => {
    return UserModel.findById(id);
  },
};
export default userService;
