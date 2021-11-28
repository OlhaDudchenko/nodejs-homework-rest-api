const { User } = require('../../db/userModal')
const { NotAuthorizedError } = require('../../helpers/errors')

const currentUser = async ({ _id }, token) => {
  const user = await User.findById({ _id })
  if (!user) {
    throw new NotAuthorizedError(`User with id : '${_id}' not found`)
  }
  return {
    email: user.email,
    subscription: user.subscription
  }
}

module.exports = currentUser
