const { Contact } = require('../../db/contactModal')
const { NotFoundError } = require('../../helpers/errors')

const getContactsById = async(id) => {
  const contact = await Contact.findById(id)
  if (!contact) {
    throw new NotFoundError(`Contact with id : ${id} not found`)
  }
  return contact
}

module.exports = getContactsById
