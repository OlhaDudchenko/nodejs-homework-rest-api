const mongoose = require('mongoose')
require('dotenv').config()

// TODO: put a .env file istead of .env.example in project to read MONGO_URL
const MONGO_URL = process.env.DB_HOST

async function main() {
  await mongoose.connect(MONGO_URL).then(() => {
    console.log('Connected to the database!')
  })
    .catch(err => {
      console.log('Cannot connect to the database!', err)
      process.exit(1)
    })
}

module.exports = {
  main
}
