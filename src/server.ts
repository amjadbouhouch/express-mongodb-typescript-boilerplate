import 'dotenv/config';
import 'express-async-errors';
import cors from 'cors';
import express from 'express';
import errorhandler from 'middlewares/errors/errorHandler';
import authRouters from 'routes/auth/auth.routes';
import connectToDataBase from './config/database';
//
process.on('unhandledRejection', (error) => {
  throw error;
});
process.on('uncaughtException', (error) => {
  // errorhandler.logError(error);

  if (!errorhandler.isOperationalError(error)) {
    process.exit(1);
  }
});

const bootstrap = async () => {
  try {
    await connectToDataBase();
    console.log('db connected successfully');

    const app = express();
    app.use(express.json());

    app.use(cors());
    // routes
    app.use('/auth', authRouters);

    // errors
    app.use(errorhandler.logError);
    app.use(errorhandler.returnError);

    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`🚀 Running at localhost:${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};
bootstrap();
