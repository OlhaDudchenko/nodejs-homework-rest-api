const listContacts = require('./contacts/listContacts')
const getContactById = require('./contacts/getContactById')
const addContact = require('./contacts/addContact')
const removeContact = require('./contacts/removeContact')
const updateContact = require('./contacts/updateContact')
const updateAllContacts = require('./contacts/updateAllContacts')

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
  updateAllContacts
}
