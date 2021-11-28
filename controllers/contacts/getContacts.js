const { getContacts } = require('../../services/contacts')

const getContactsController = async (req, res, next) => {
  const { _id: owner } = req.user
  const { page, limit, favorite } = req.query
  const options = {
    page: parseInt(page) || 1,
    limit: parseInt(limit) || 20,
    select: { __v: 0 },
  }
  const contacts = await getContacts({ owner }, options, favorite)
  res.status(200).json({ contacts })
}

module.exports = getContactsController
