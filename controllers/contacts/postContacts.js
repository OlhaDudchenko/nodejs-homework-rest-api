const { postContacts } = require('../../services/contacts')

const postContactsController = async (req, res, next) => {
  const { _id: owner } = req.user
  const { name, email, phone, favorite } = req.body

  const contact = await postContacts({ name, email, phone, favorite }, owner)
  res.status(201).json({ contact })
}

module.exports = postContactsController
