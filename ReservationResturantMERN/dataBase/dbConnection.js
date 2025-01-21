

import mongoose from "mongoose";


const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('MongoDB is connected successfully !');
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

export default dbConnection;
