const getContacts = require('./getContacts')
const getContactsById = require('./getContactsById')
const postContacts = require('./postContacts')
const deleteContacts = require('./deleteContacts')
const putContacts = require('./putContacts')
const patchContacts = require('./patchContacts')

module.exports = {
  getContacts,
  getContactsById,
  postContacts,
  deleteContacts,
  putContacts,
  patchContacts
}
