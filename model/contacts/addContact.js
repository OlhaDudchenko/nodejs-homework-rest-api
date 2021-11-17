const { uuidv4 } = require('./defaults')
const listContacts = require('./listContacts')
const updateAllContacts = require('./updateAllContacts')

const addContact = async (name, email, phone) => {
  const contact = ({ id: uuidv4(), name, email, phone })
  const allContacts = await listContacts()
  const newData = [...allContacts, contact]
  await updateAllContacts(newData)
  return contact
}

module.exports = addContact
