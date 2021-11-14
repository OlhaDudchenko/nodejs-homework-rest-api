const { fs, contactsPath } = require('./defaults')

const listContacts = async () => {
  try {
    const data = await fs.readFile(contactsPath, 'utf8')
    const contactsList = JSON.parse(data)
    return contactsList
  } catch (error) {
    console.error(error)
  }
}

module.exports = {
  listContacts,
}
