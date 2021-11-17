const fs = require('fs/promises')
const contacts = require('../../db/contacts.json')
const path = require('path')
const contactsPath = path.resolve('db', './contacts.json')
const { v4: uuidv4 } = require('uuid')

module.exports = {
  fs,
  contactsPath,
  uuidv4,
  contacts
}
