import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB Connected');
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};


export default connectDB;
// This code connects to a MongoDB database using Mongoose.
// It exports a function `connectDB` that attempts to connect to the database using the URI stored in the environment variable `MONGO_URI`.