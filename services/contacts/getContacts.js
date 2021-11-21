const { Contact } = require('../../db/contactModal')

const getContacts = async() => {
  const contacts = await Contact.find({})
  return contacts
}

module.exports = getContacts
