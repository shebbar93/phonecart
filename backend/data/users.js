const bcrypt = require('bcryptjs')

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'srindhi',
    email: 'srinidhi@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'hebbar',
    email: 'hebbar@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

module.exports = users;