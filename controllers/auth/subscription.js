const { subscriptionUser } = require('../../services/auth')

const subscriptionUserController = async (req, res, next) => {
  const { _id: owner } = req.user
  const id = req.params.userId
  const { subscription } = req.body
  const user = await subscriptionUser(id, { subscription }, owner)
  res.status(200).json({ user })
}

module.exports = subscriptionUserController
