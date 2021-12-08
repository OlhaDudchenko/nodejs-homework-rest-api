const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { User } = require('../../db/userModal')
const { NotAuthorizedError } = require('../../helpers/errors')

const loginUser = async ({ email, password }) => {
  const user = await User.findOne({ email })
  if (!user) {
    throw new NotAuthorizedError(`Email: '${email}' not found`)
  }
  if (!await bcrypt.compare(password, user.password)) {
    throw new NotAuthorizedError('Password is wrong')
  }
  const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, { experesIn: '1h' })
  await User.findByIdAndUpdate(user._id, { token })
  return {
    token: token,
    user: {
      email: user.email,
      subscription: user.subscription
    }
  }
}

module.exports = loginUser
