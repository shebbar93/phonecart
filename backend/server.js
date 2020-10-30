const express = require('express')
const dotEnv = require('dotenv')
const connectDB = require('./config/db')
const colors = require('colors')
const productRoute = require('./routes/productRoutes')
const orderRoute = require('./routes/orderRoutes')
const userRoute = require('./routes/userRoutes')
const { notFound, errorHandler } = require('./middleware/errorMiddleware')

dotEnv.config();

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
    res.send('API RUNNING...')
})

connectDB();

app.use('/api/products', productRoute)
app.use('/api/users', userRoute)
app.use('/api/orders', orderRoute)
app.get('/api/config/paypal', (req, res) => res.send(process.env.PAYPAL_CLIENT_ID))

app.use(notFound)
app.use(errorHandler)

const port = process.env.PORT || 5000
app.listen(port, console.log(`Node running in ${process.env.NODE_ENV} mode in port ${port}`.cyan.underline))


//UserModel.js matchPassword Does not support Arrow function :( Check on this