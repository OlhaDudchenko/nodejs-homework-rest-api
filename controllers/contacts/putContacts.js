const { putContacts } = require('../../services/contacts')

const putContactsController = async (req, res, next) => {
  const { name, email, phone } = req.body
  const id = req.params.contactId
  const updateContact = await putContacts(id, { name, email, phone })
  res.status(200).json({ updateContact })
}

module.exports = putContactsController
