const { Contact } = require('../../db/contactModal')
const { NotFoundError } = require('../../helpers/errors')

const deleteContacts = async(id, owner) => {
  const searchingId = await Contact.findOneAndRemove({ _id: id, owner })
  if (!searchingId) {
    throw new NotFoundError('Not found')
  }
}

module.exports = deleteContacts
