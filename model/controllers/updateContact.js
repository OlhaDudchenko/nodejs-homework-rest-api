const { fs, contactsPath } = require('./defaults')

const updateContact = async (contactId, body) => {
  try {
    const data = await fs.readFile(contactsPath, 'utf8')
    const contactsList = JSON.parse(data)
    let newContact
    for (const contact of contactsList) {
      if (contact.id === Number(contactId)) {
        newContact = { ...contact, ...body }
      }
    }
    const newData = []
    contactsList.forEach(contact => {
      if (contact.id === newContact.id) {
        contact = { ...newContact }
      }
      newData.push(contact)
    })
    await fs.writeFile(contactsPath, JSON.stringify([...newData]))
    return newContact
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  updateContact,
}
