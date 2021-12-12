const { User } = require('../../db/userModal')
const { NotFoundError, NotAuthorizedError } = require('../../helpers/errors')
require('dotenv').config()
const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const verifyToken = async (searchToken) => {
  if (!searchToken) {
    throw new NotAuthorizedError('Invalid or expired confirmation verification token')
  }
  const user = await User.findOneAndUpdate({ verifyToken: searchToken }, { verifyToken: 'null', verify: true })

  if (!user) {
    throw new NotFoundError('User not found')
  }

  const msg = {
    to: user.email,
    from: 'dudchenko.olha92@gmail.com',
    subject: 'Thank you for registration!',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<h1>and easy to do anywhere, even with Node.js</h1>',
  }
  await sgMail.send(msg)
}

module.exports = verifyToken
