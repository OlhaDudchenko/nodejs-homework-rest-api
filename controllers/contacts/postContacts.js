const { addContact } = require('../../model/index')

const postContacts = async (req, res, next) => {
  const { name, email, phone } = req.body
  const contacts = await addContact(name, email, phone)
  res.status(201).json({ contacts })
}

module.exports = postContacts
