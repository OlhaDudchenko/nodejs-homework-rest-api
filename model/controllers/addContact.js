const { fs, contactsPath, uuidv4 } = require('./defaults')

const addContact = async (name, email, phone) => {
  const contact = ({ id: uuidv4(), name, email, phone })
  try {
    const data = await fs.readFile(contactsPath, 'utf8')
    const contactsList = JSON.parse(data)
    const newData = JSON.stringify([...contactsList, contact])
    await fs.writeFile(contactsPath, newData)
    return contact
  } catch (error) {
    console.error(error)
  }
}

module.exports = {
  addContact,
}
