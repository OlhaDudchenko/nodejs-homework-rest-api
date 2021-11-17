const { fs, contactsPath } = require('./defaults')

const updateAllContacts = async (newContacts) => {
  await fs.writeFile(contactsPath, JSON.stringify(newContacts))
}

module.exports = updateAllContacts
