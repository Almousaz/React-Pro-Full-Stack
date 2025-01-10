const Mongoose = require("mongoose");



const connectDB = async () => {
  Mongoose.connect(process.env.DB_CONNECT, {
  })
    .then((client) => {
      console.log(`MongoDB Connected ${client.connection.host}`);
    })
    .catch((err) => {
      console.error(err);
    });
};
module.exports = connectDB;
