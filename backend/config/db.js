import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

export const connectDB = async () => {
  try {
    

    const dbUrl =   process.env.MONGO_URI 

    const conn = await mongoose.connect(dbUrl, {
      // const conn = await mongoose.connect("mongodb://localhost:27017/customerAppDB", {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      // useCreateIndex: true, //Console Error: option usecreateindex is not supported
    })

    console.log(`MongoDB Connected: ${conn.connection.host}`)
  } catch (error) {
    console.error(`Error: ${error.message}`)
    process.exit(1)
  }
}
