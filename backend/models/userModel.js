const mongoose = require('mongoose')

const userSchmea = mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        isAdmin: {
            type: Boolean,
            required: true,
            default: false
        }
    }, {
    timeStamp: true
}
)

const User = mongoose.model('User', userSchmea)

module.exports = User
