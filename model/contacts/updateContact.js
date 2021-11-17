const listContacts = require('./listContacts')
const updateAllContacts = require('./updateAllContacts')

const updateContact = async (contactId, body) => {
  const contacts = await listContacts()
  const idx = contacts.findIndex((contact) => String(contact.id) === contactId)
  if (idx === -1) {
    return null
  }
  const updatedContacts = { ...contacts[idx], ...body }
  contacts[idx] = updatedContacts
  await updateAllContacts(contacts)
  return updatedContacts
}
module.exports = updateContact
