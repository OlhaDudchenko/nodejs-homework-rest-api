const jwt = require('jsonwebtoken')
const { NotAuthorizedError } = require('../helpers/errors')
const { User } = require('../db/userModal')

const authMiddleware = async(req, res, next) => {
  try {
    const { authorization } = req.headers

    if (!authorization) {
      next(new NotAuthorizedError('Please, provide a token in request authorization header'))
    }
    const [tokenType, token] = await authorization.split(' ')

    if (!token) {
      next(new NotAuthorizedError('Please, provide a token'))
    }

    const verify = jwt.verify(token, process.env.JWT_SECRET)
    if (!verify) {
      next(new NotAuthorizedError('Invalid token'))
    }

    const user = await User.findOne({ _id: verify._id })

    if (!user) {
      next(new NotAuthorizedError('Not authorized'))
    }

    req.token = token
    req.user = user
    next()
  } catch (err) {
    next(new NotAuthorizedError('Invalid token'))
  }
}

module.exports = {
  authMiddleware
}
