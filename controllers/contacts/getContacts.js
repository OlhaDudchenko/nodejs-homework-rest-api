const { getContacts } = require('../../services/contacts')

const getContactsController = async (req, res, next) => {
  const contacts = await getContacts()
  res.status(200).json({ contacts })
}

module.exports = getContactsController
