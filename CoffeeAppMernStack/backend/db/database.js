/* eslint-disable no-undef */
import mongoose from "mongoose";
import colors from "colors";


const connectDB = async () => {
  try {
    // eslint-disable-next-line no-undef
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(
      `MongoDB is connected successfully ${mongoose.connection.host}`.bgBlue.white
    );
  } catch (err) {
    console.log(`MongoDb database error: ${err}`.bgRed.white);
    process.exit(1);
  }
};

export default connectDB;
