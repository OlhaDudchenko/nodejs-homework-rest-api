const { updateContact } = require('../../model/index')

const patchContacts = async (req, res, next) => {
  const contacts = await updateContact(req.params.contactId, req.body)
  res.status(200).json({ contacts })
}

module.exports = patchContacts
