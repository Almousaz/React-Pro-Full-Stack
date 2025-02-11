import mongoose from "mongoose";
import colors from "colors";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(
      `MongoDB is connected successfully ${mongoose.connection.host}`.bgCyan
        .white
    );
  } catch (err) {
    console.log(`MongoDb database error: ${err}`.bgRed.white);
  }
};

export default connectDB;
