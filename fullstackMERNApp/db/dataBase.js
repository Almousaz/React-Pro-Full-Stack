import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(
      `MongoDB is connected successfully ${mongoose.connection.host}`
    );
  } catch (err) {
    console.log(`MongoDb database error: ${err}`);
  }
};

export default connectDB;

