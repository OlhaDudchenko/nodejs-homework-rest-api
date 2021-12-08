const express = require('express')
const logger = require('morgan')
const cors = require('cors')
const authRouter = require('./routes/api/users/auth')
const avatarRouter = require('./routes/api/users/avatar')
const contactsRouter = require('./routes/api/contacts')
const { errorHandler } = require('./helpers/apiHelpers')
const path = require('path')
const app = express()

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short'

app.use(logger(formatsLogger))
app.use(cors())
app.use(express.json())

app.use(express.static(path.resolve('public')))

app.use('/users', authRouter, avatarRouter)
app.use('/api/contacts', contactsRouter)

app.use(errorHandler)

app.use((req, res) => {
  res.status(404).json({ message: 'Not found' })
})

module.exports = app
