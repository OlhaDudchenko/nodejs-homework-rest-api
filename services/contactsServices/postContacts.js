const { Contact } = require('../../db/contactModal')

const postContacts = async({ name, email, phone, favorite }) => {
  const contact = new Contact({ name, email, phone, favorite })
  await contact.save()
  return contact
}

module.exports = postContacts
