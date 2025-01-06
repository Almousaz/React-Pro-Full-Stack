const Mongoose = require("mongoose");

// Local DB
// const LocalDB = process.env.LOCAL_DB

const connectDB = async () => {
  Mongoose.connect(process.env.LOCAL_DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then((client) => {
      console.log(`MongoDB Connected ${client.connection.host}`);
    })
    .catch((err) => {
      console.error(err);
    });
};
module.exports = connectDB;
