const { logoutUser } = require('../../services/auth')

const logoutController = async (req, res, next) => {
  const { _id, token } = req.user
  await logoutUser({ _id, token })
  res.status(204)
  res.end()
}

module.exports = logoutController
