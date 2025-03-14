const Mongoose = require("mongoose");



const connectDB = async () => {
  Mongoose.connect(process.env.LOCAL_DB, {
  })
    .then((client) => {
      console.log(`MongoDB Connected ${client.connection.host}`);
    })
    .catch((err) => {
      console.error(err);
    });
};
module.exports = connectDB;
