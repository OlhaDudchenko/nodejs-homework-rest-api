const { Contact } = require('../../db/contactModal')

const putContacts = async(id, { name, email, phone }, owner) => {
  const contact = await Contact.findOneAndUpdate({ _id: id, owner }, { $set: { name, email, phone } }, { new: true })
  return contact
}

module.exports = putContacts
