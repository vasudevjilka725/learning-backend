import mongoose from "mongoose";
import { DB_NAME } from "../constansts.js";

const connectDB = async () => {
    try {
        // mongoose gives returned object , so we can store into a variable
       const connectionInstance  = await mongoose.connect
       (`${process.env.MONGODB_URI}/${DB_NAME}`)
       console.log(`\n MongoDB connected !! DB HOST : 
        ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("MongoDB connection error: " , error);
        process.exit(1) // process is part of node.js
    }
}

export default connectDB