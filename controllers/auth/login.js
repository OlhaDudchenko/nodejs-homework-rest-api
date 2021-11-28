const { loginUser } = require('../../services/auth')

const loginController = async (req, res, next) => {
  const { email, password } = req.body
  const user = await loginUser({ email, password })
  res.status(200).json(user)
}

module.exports = loginController
