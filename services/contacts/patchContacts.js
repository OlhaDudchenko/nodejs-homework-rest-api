const { Contact } = require('../../db/contactModal')
const { WrongParametersError } = require('../../helpers/errors')

const patchContacts = async (id, { favorite }) => {
  if (favorite === {} || !favorite) {
    throw new WrongParametersError('missing field favorite')
  }
  await Contact.findByIdAndUpdate(id, { favorite })
  const updateContact = await Contact.findById(id)
  return updateContact
}

module.exports = patchContacts
