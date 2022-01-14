const { User } = require('../../db/userModal')
const { NotAuthorizedError } = require('../../helpers/errors')
const sha256 = require('sha256')
const { v4: uuidv4 } = require('uuid')
require('dotenv').config()
const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const updatePassword = async (email) => {
  const user = await User.findOne({ email, verify: true })
  if (!user) {
    throw new NotAuthorizedError(`Email: '${email}' not found`)
  }
  const password = sha256(uuidv4() + process.env.JWT_SECRET)
  user.password = password
  await user.save()

  const msg = {
    to: user.email,
    from: 'dudchenko.olha92@gmail.com',
    subject: 'New password',
    text: `Here is your temporary password: ${password}`,
    html: `Here is your temporary password: ${password}`,
  }
  await sgMail.send(msg)
}

module.exports = updatePassword
