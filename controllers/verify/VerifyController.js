const { verifyToken, resendEmail, updatePassword } = require('../../services/verification')

class VerifyController {
  constructor() {
    this.verify = this.verify.bind(this)
    this.resendVerification = this.resendVerification.bind(this)
  }

  async verify(req, res, next) {
    const searchToken = req.params.verificationToken
    await verifyToken(searchToken)
    res.status(200).json({ message: 'Verification successful' })
  }

  async resendVerification(req, res, next) {
    const { email } = req.body
    await resendEmail(email)
    res.status(200).json({ message: 'Verification email sent' })
  }

  async forgotPassword(req, res, next) {
    const { email } = req.body
    await updatePassword(email)
    res.status(200).json({ message: 'New email sent' })
  }
}

module.exports = new VerifyController()
