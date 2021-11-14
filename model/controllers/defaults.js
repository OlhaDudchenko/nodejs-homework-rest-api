const fs = require('fs/promises')
// const contacts = require('./contacts.json')
const path = require('path')
const contactsPath = path.resolve('model', './contacts.json')
const { v4: uuidv4 } = require('uuid')

module.exports = {
  fs,
  contactsPath,
  uuidv4
}
