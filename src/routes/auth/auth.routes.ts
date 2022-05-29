import express from 'express';
import authController from './auth.controller';
const authRouters = express.Router();

authRouters.post('/sign-up', authController.signUp);
authRouters.post('/login', authController.login);
export default authRouters;
