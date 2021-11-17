const { removeContact } = require('../../model/index')

const deleteContacts = async (req, res, next) => {
  const searchingId = await removeContact(req.params.contactId)
  if (searchingId === true) {
    return res.status(404).json({ message: 'Not found' })
  }
  res.status(200).json({ message: ' deleted' })
}

module.exports = deleteContacts
