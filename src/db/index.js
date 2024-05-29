import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { DB_NAME } from '../constant.js';

// Load environment variables from .env file
dotenv.config({ path: './.env' });

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`\n Mongodb connected !! DB host: ${connectionInstance.connection.host}`);
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

export default connectDB;
