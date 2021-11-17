const listContacts = require('./listContacts')

const getContactById = async (contactId) => {
  const allContacts = await listContacts()
  const contactsById = allContacts.filter((contact) => contact.id === Number(contactId))
  return contactsById
}

module.exports = getContactById
