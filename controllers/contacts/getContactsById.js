const { getContactsById } = require('../../services/contactsServices')

const getContactsByIdController = async (req, res, next) => {
  const id = req.params.contactId
  const contact = await getContactsById(id)
  res.status(200).json({ contact })
}

module.exports = getContactsByIdController
