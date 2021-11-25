const { putContacts } = require('../../services/contacts')

const putContactsController = async (req, res, next) => {
  const { _id: owner } = req.user
  const { name, email, phone } = req.body
  const id = req.params.contactId
  const contact = await putContacts(id, { name, email, phone }, owner)
  res.status(200).json({ contact })
}

module.exports = putContactsController
