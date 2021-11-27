const { User } = require('../../db/userModal')
const { WrongParametersError } = require('../../helpers/errors')

const subscriptionUser = async (id, { subscription }, owner) => {
  if (subscription === {} || subscription === undefined) {
    throw new WrongParametersError('missing field subscription')
  }
  const user = await User.findOneAndUpdate({ _id: id },
    { $set: { subscription, owner } }, { new: true }
  )
  return user
}

module.exports = subscriptionUser
