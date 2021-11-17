const listContacts = require('./listContacts')
const updateAllContacts = require('./updateAllContacts')

const removeContact = async (contactId) => {
  const allContacts = await listContacts()
  const newData = allContacts.filter((contact) => String(contact.id) !== contactId)
  await updateAllContacts(newData)
  return newData.includes(contactId)
}

module.exports = removeContact
