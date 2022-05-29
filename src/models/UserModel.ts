import mongoose from 'mongoose';

const { Schema } = mongoose;

const UserSchema = new Schema({
  avatar: { type: String, required: false },
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});
const UserModel = mongoose.model('user', UserSchema);

export default UserModel;
