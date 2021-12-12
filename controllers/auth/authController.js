const { registrationUser, currentUser, loginUser, logoutUser, subscriptionUser } = require('../../services/auth')

class AuthController {
  constructor() {
    this.register = this.register.bind(this)
    this.logIn = this.logIn.bind(this)
    this.logOut = this.logOut.bind(this)
    this.current = this.current.bind(this)
    this.subscription = this.subscription.bind(this)
  }

  async register(req, res, next) {
    const { email, password } = req.body
    const user = await registrationUser({ email, password })
    res.status(201).json({ user: user })
  }

  async logIn(req, res, next) {
    const { email, password } = req.body
    const user = await loginUser({ email, password })
    res.status(200).json(user)
  }

  async logOut(req, res, next) {
    const { _id, token } = req.user
    await logoutUser({ _id, token })
    res.status(204)
    res.end()
  }

  async current(req, res, next) {
    const { _id } = req.user
    const user = await currentUser({ _id })
    res.status(200).json(user)
  }

  async subscription(req, res, next) {
    const { _id: owner } = req.user
    const id = req.params.userId
    const { subscription } = req.body
    const user = await subscriptionUser(id, { subscription }, owner)
    res.status(200).json({ user })
  }
}

module.exports = new AuthController()
