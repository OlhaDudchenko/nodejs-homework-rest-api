const { Contact } = require('../../db/contactModal')

const putContacts = async(id, { name, email, phone }) => {
  await Contact.findByIdAndUpdate(id, { name, email, phone })
  const updateContact = await Contact.findById(id)
  return updateContact
}

module.exports = putContacts
