const registrationController = require('./registration')
const loginController = require('./login')
const logoutController = require('./logout')
const currentUserController = require('./current')
const subscriptionController = require('./subscription')
module.exports = {
  registrationController,
  loginController,
  logoutController,
  currentUserController,
  subscriptionController
}
