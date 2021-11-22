const { patchContacts } = require('../../services/contacts')

const patchContactsController = async (req, res, next) => {
  const id = req.params.contactId
  const { favorite } = req.body
  const updateContact = await patchContacts(id, { favorite })
  res.status(200).json({ updateContact })
}

module.exports = patchContactsController
