import mongoose from "mongoose";
import { MONGO_URI } from "../constants/env";

const connectToDatabase = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("Database connected");
  } catch (e) {
    console.log("Could not connect to Database", e);
    process.exit(1);
  }
};

export default connectToDatabase;
