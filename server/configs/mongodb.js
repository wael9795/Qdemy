import mongoose from "mongoose";

//connect to mongodb database
const connectDB = async () => {
  mongoose.connection.on("connected", () => {
    console.log("database connected successfully");
  });
  
  mongoose.connection.on("error", (error) => {
    console.error("Database connection error:", error);
  });

  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    throw error;
  }
};

export default connectDB;
