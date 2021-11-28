const { Contact } = require('../../db/contactModal')

const postContacts = async ({ name, email, phone, favorite }, owner) => {
  const contact = new Contact({ name, email, phone, favorite, owner })
  await contact.save()
  return contact
}

module.exports = postContacts
