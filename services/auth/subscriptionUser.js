const { User } = require('../../db/userModal')
const { WrongParametersError } = require('../../helpers/errors')
const assert = require('assert')

const subscriptionUser = async (id, { subscription }, owner) => {
  if (subscription === {} || subscription === undefined) {
    throw new WrongParametersError('missing field subscription')
  }

  const user = await User.findOneAndUpdate({ _id: id },
    { $set: { subscription: subscription, owner } }, { new: true })
  const error = user.validateSync()
  if (error) {
  assert.equal(error.errors.subscription.message)
  }
  return user
}

module.exports = subscriptionUser
