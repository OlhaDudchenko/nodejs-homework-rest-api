const { deleteContacts } = require('../../services/contacts')

const deleteContactsController = async (req, res, next) => {
  const { _id: owner } = req.user
  const id = req.params.contactId
  await deleteContacts(id, owner)
  res.status(200).json({ message: ' deleted' })
}

module.exports = deleteContactsController
