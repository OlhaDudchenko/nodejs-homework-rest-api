const { Contact } = require('../../db/contactModal')
const { WrongParametersError } = require('../../helpers/errors')

const patchContacts = async (id, { favorite }, owner) => {
  if (favorite === {} || favorite === undefined) {
    throw new WrongParametersError('missing field favorite')
  }
  const contact = await Contact.findOneAndUpdate({ _id: id },
    { $set: { favorite, owner } }
  )
  return contact
}

module.exports = patchContacts
