const { getContactsById } = require('../../services/contacts')

const getContactsByIdController = async (req, res, next) => {
  const { _id: owner } = req.user
  const id = req.params.contactId
  const contact = await getContactsById(id, owner)
  res.status(200).json({ contact })
}

module.exports = getContactsByIdController
