const { User } = require('../../db/userModal')
const { NotAuthorizedError } = require('../../helpers/errors')

const logoutUser = async ({ _id }, token) => {
  const user = await User.findOne({ _id })
  if (!user) {
    throw new NotAuthorizedError(`User with id : '${_id}' not found`)
  }
  await User.findByIdAndUpdate(_id, { token: null })
}

module.exports = logoutUser
