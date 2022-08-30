import mongoose from "mongoose";

const connectDatabase = () => {
  try {
    const connStr = process.env.MONGO_URL;

    const connect = mongoose.connect(connStr);
    connect && console.log("Database is connected");
  } catch (error) {
    console.log(error);
  }
};

export default connectDatabase;
