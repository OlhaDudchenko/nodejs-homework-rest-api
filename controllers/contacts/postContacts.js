const { postContacts } = require('../../services/contacts')

const postContactsController = async (req, res, next) => {
  const { name, email, phone, favorite } = req.body
  const contact = await postContacts({ name, email, phone, favorite })
  res.status(201).json({ contact })
}

module.exports = postContactsController
