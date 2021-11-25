const { currentUser } = require('../../services/auth')

const currentUserController = async (req, res, next) => {
  const { _id } = req.user
  const user = await currentUser({ _id })
  res.status(200).json(user)
}

module.exports = currentUserController
