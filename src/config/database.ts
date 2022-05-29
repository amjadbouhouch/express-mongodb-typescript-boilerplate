import mongoose from 'mongoose';

async function connectToDataBase() {
  if (!process.env.URI_DB) {
    throw new Error('URI_DB is not defined');
  }
  await mongoose.connect(process.env.URI_DB);
}

export default connectToDataBase;
