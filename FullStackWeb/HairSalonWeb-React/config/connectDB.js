// const mongoose = require('mongoose')


// const connectDB = async () => {
//     try {
//         await mongoose.connect(process.env.DATABASE_URI , { useNewUrlParser: true, useUnifiedTopology: true })
//         console.log('Connected to MongoDB');
//     } catch (error) {
//         console.error('Error connecting to MongoDB:', error);
//     }
// }

// module.exports = connectDB

const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.DB_STRING, {
      useNewUrlParser: true,
        useUnifiedTopology: true,
    })

    console.log(`MongoDB Connected: ${conn.connection.host}`)
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}

module.exports = connectDB














// mongoose.connect(
//   `mongodb+srv://Mayanwolfe:${process.env.MONGODB_PASSWORD}@cluster0.pztfz.mongodb.net/hair_salon?retryWrites=true&w=majority&appName=Cluster0`
// ).then(() => {
//   console.log('Connected to MongoDB');
// }).catch((error) => {
//   console.error('Error connecting to MongoDB:', error);
// })