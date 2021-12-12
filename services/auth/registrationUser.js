const gravatar = require('gravatar')
const { v4: uuidv4 } = require('uuid')
const { User } = require('../../db/userModal')
const { RegistrationConflictError } = require('../../helpers/errors')
require('dotenv').config()
const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const registrationUser = async ({ email, password }) => {
  const findUserByEmail = await User.findOne({ email })
  if (findUserByEmail) {
    throw new RegistrationConflictError('Email in use')
  }

  const user = new User({ email, password, avatarURL: gravatar.url(email), verifyToken: uuidv4() })
  await user.save()

  const msg = {
    to: email,
    from: 'dudchenko.olha92@gmail.com',
    subject: 'Verification email',
    text: `verify your email by this link http://localhost:3000/users/verify/${user.verifyToken}`,
    html: `<strong>verify your email by this link http://localhost:3000/users/verify/${user.verifyToken}</strong>`,
  }
  try {
    await sgMail.send(msg)
  } catch (error) {
    console.error(error)
  }

  const newUser = {
    email: user.email,
    subscription: user.subscription,
  }

  return newUser
}

module.exports = registrationUser
