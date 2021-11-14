const { fs, contactsPath } = require('./defaults')

const removeContact = async (contactId) => {
  try {
    const data = await fs.readFile(contactsPath, 'utf8')
    const contactsList = JSON.parse(data)
    const newData = contactsList.filter((contact) => contact.id !== Number(contactId))
    await fs.writeFile(contactsPath, JSON.stringify(newData))
    return newData.includes(contactId)
  } catch (error) {
    console.error(error)
  }
}

module.exports = {
  removeContact,
}
