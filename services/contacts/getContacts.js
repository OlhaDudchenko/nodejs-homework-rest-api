const { Contact } = require('../../db/contactModal')

const getContacts = async ({ owner }, options, favorite) => {
  console.log(favorite !== undefined)
  if (favorite !== undefined) {
    const contacts = await Contact.find({ favorite, owner })
    return contacts
  } else {
    const paginateContacts = await Contact.paginate({ owner }, options)
    return paginateContacts
  }
}

module.exports = getContacts
