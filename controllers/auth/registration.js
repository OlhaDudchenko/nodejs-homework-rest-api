const { registrationUser } = require('../../services/auth')

const registrationController = async (req, res, next) => {
  const { email, password } = req.body
  const user = await registrationUser({ email, password })
  res.status(201).json({ user: user })
}

module.exports = registrationController
