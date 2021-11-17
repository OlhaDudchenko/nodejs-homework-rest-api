const getContacts = require('./getContacts')
const getContactsById = require('./getContactsById')
const deleteContacts = require('./deleteContacts')
const patchContacts = require('./patchContacts')
const postContacts = require('./postContacts')

module.exports = {
  getContacts,
  getContactsById,
  deleteContacts,
  patchContacts,
  postContacts
}
