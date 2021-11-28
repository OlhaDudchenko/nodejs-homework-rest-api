const { patchContacts } = require('../../services/contacts')

const patchContactsController = async (req, res, next) => {
  const { _id: owner } = req.user
  const id = req.params.contactId
  const { favorite } = req.body
  const contact = await patchContacts(id, { favorite }, owner)
  res.status(200).json({ contact })
}

module.exports = patchContactsController
