import { ENV } from '../env.js';
import mongoose from 'mongoose';

const mongo_url = ENV.MONGO_URI;

export const connectDB = async () => {
  try {
    await mongoose.connect(mongo_url);
    console.log("MongoDB connected...");
  } catch (err) {
    console.log("MongoDB connection error:", err);
    process.exit(1);
  }
};