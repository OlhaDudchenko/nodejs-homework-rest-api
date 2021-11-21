const { Contact } = require('../../db/contactModal')
const { NotFoundError } = require('../../helpers/errors')

const deleteContacts = async(id) => {
  const searchingId = await Contact.findByIdAndRemove(id)
  if (!searchingId) {
    throw new NotFoundError('Not found')
  }
}

module.exports = deleteContacts
