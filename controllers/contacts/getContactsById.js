const { getContactById } = require('../../model/index')

const getContactsById = async (req, res, next) => {
  const contact = await getContactById(req.params.contactId)
  if (contact.length === 0 || !contact) {
    return res.status(404).json({ message: 'Not found' })
  }
  res.status(200).json({ contact })
}

module.exports = getContactsById
