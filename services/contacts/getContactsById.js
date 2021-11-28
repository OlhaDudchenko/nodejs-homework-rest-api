const { Contact } = require('../../db/contactModal')
const { NotFoundError } = require('../../helpers/errors')

const getContactsById = async (id, owner) => {
  const contact = await Contact.findOne({ _id: id, owner })
  if (!contact) {
    throw new NotFoundError(`Contact with id : ${id} not found`)
  }
  return contact
}

module.exports = getContactsById
