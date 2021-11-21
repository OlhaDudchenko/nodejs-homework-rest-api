const getContactsController = require('./getContacts')
const getContactsByIdController = require('./getContactsById')
const deleteContactsController = require('./deleteContacts')
const putContactsController = require('./putContacts')
const postContactsController = require('./postContacts')
const patchContactsController = require('./patchContacts')

module.exports = {
  getContactsController,
  getContactsByIdController,
  deleteContactsController,
  putContactsController,
  postContactsController,
  patchContactsController
}
