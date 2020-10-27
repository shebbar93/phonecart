const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

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

//Does not support Arrow function :(
userSchmea.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password)
}

userSchmea.pre('save', async function (next) {
    if (!this.isModified('password')) {
        next()
    }
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
})

const User = mongoose.model('User', userSchmea)

module.exports = User
