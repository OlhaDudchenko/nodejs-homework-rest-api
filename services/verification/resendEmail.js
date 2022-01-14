const { User } = require('../../db/userModal')
const { NotFoundError, WrongParametersError } = require('../../helpers/errors')
require('dotenv').config()
const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const resendEmail = async (email) => {
  const user = await User.findOne({ email })

  if (!user) {
    throw new NotFoundError('User not found')
  }

  if (user.verify) {
    throw new WrongParametersError('Verification has already been passed')
  }
  const msg = {
    to: email,
    from: 'dudchenko.olha92@gmail.com',
    subject: 'Verification email',
    text: `verify your email by this link http://localhost:3000/users/verify/${user.verifyToken}`,
    html: `<strong>verify your email by this <a href="http://localhost:3000/users/verify/${user.verifyToken}">link</a>link</strong>`,
  }

  try {
    await sgMail.send(msg)
  } catch (error) {
    console.error(error.message)
  }
}

module.exports = resendEmail
