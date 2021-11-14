const { fs, contactsPath } = require('./defaults')

const getContactById = async (contactId) => {
  try {
    const data = await fs.readFile(contactsPath, 'utf8')
    const contactsList = JSON.parse(data)
    const contactsById = contactsList.filter((contact) => contact.id === Number(contactId))
    return contactsById
  } catch (error) {
    console.error(error)
  }
}

module.exports = {
  getContactById,
}
