const mongoose = require('mongoose');
const colors = require('colors');
const env = require('dotenv');
const connectDB = require('./config/db');
const products = require('./data/products');
const users = require('./data/users');
const Product = require('./models/productModel');
const User = require('./models/userModel');
const Order = require('./models/orderModel');

env.config();
connectDB();

const importData = async () => {
    try {
        await User.deleteMany();
        await Product.deleteMany();
        await Order.deleteMany();

        const createdUsers = await User.insertMany(users);
        const adminUser = createdUsers[0]._id;
        const sampleProducts = products.map(prod => {
            return { ...prod, user: adminUser }
        })
        await Product.insertMany(sampleProducts);
        console.log('Import Successful..!'.green.inverse);
        process.exit();
    } catch (error) {
        console.error(`Import failed : ${error}`.red.inverse);
        process.exit(1)
    }
}
const destroyData = async () => {
    try {
        await User.deleteMany();
        await Product.deleteMany();
        await Order.deleteMany();
        console.log('Delete Successful..!'.red.inverse);
        process.exit();

    } catch (error) {
        console.error(`Delete failed : ${error}`.red.inverse);
        process.exit(1)
    }
}

if (process.argv[2] === '-d')
    destroyData();
else
    importData();