const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true
        })
        console.log(`MongoDB connected : ${conn.connection.host}`.yellow.bold)
    } catch (error) {
        console.error(`Error while conneting Mongo DB : ${error.message}`.red.bold)
        process.exit(1);
    }
}

module.exports = connectDB;