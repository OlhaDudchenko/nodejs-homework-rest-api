const { deleteContacts } = require('../../services/contactsServices')

const deleteContactsController = async (req, res, next) => {
  const id = req.params.contactId
  await deleteContacts(id)
  res.status(200).json({ message: ' deleted' })
}

module.exports = deleteContactsController
