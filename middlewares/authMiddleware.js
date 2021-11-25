const jwt = require('jsonwebtoken')
const { NotAuthorizedError } = require('../helpers/errors')
const { User } = require('../db/userModal')

const authMiddleware = async (req, res, next) => {
  try {
    const { authorization } = req.headers

    const [ _, token] = authorization.split(' ')
    if (!token) {
      next(new NotAuthorizedError('Please, provide a token'))
    }

    const decoded = jwt.decode(token, process.env.JWT_SECRET)

    if (!decoded) {
      next(new NotAuthorizedError('Invalid token'))
    }

    const user = await User.findOne({ _id: decoded._id })

    if (!user) {
      next(new NotAuthorizedError('Not authorized'))
    }
    req.user = user
    next()
  } catch (err) {
    next(new NotAuthorizedError('Invalid token'))
  }
}

module.exports = {
  authMiddleware
}
