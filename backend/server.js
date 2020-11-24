const path = require('path')
const express = require('express')
const morgan = require('morgan')
const dotEnv = require('dotenv')
const connectDB = require('./config/db')
const colors = require('colors')
const productRoute = require('./routes/productRoutes')
const orderRoute = require('./routes/orderRoutes')
const userRoute = require('./routes/userRoutes')
const { notFound, errorHandler } = require('./middleware/errorMiddleware')
const uploadRoutes = require('./routes/uploadRoutes');
dotEnv.config();
__dirname = path.resolve()
const app = express()
if (process.env.NODE_ENV === 'DEVELOPMENT') {
    app.use(morgan('dev'))
}
app.use(express.json())

app.get('/', (req, res) => {
    res.send('API RUNNING...')
})

connectDB();

app.use('/api/products', productRoute)
app.use('/api/users', userRoute)
app.use('/api/orders', orderRoute)
app.get('/api/config/paypal', (req, res) => res.send(process.env.PAYPAL_CLIENT_ID))
app.use('/api/upload', uploadRoutes);
app.use('/uploads', express.static(path.join(__dirname, '/uploads')));
app.use(notFound)
app.use(errorHandler)

const port = process.env.PORT || 5000
app.listen(port, console.log(`Node running in ${process.env.NODE_ENV} mode in port ${port}`.cyan.underline))


//UserModel.js matchPassword Does not support Arrow function :( Check on this