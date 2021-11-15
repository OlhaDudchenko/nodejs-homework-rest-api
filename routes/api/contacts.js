const express = require('express')
const router = express.Router()
const { addContactValidation, patchContactValidation } = require('../../middlewares/validationMiddlewares')
const { listContacts, getContactById, removeContact, addContact, updateContact } = require('../../model/index')

router.get('/', async (req, res, next) => {
  const contacts = await listContacts()
  res.status(200).json({ contacts })
})

router.get('/:contactId', async (req, res, next) => {
  const contact = await getContactById(req.params.contactId)
  if (contact.length === 0) {
    return res.status(404).json({ message: 'Not found' })
  }
  res.status(200).json({ contact })
})

router.post('/', addContactValidation, async (req, res, next) => {
  const { name, email, phone } = req.body
  const contacts = await addContact(name, email, phone)
  res.status(201).json({ contacts })
})

router.delete('/:contactId', async (req, res, next) => {
  const searchingId = await removeContact(req.params.contactId)
  if (searchingId === true) {
    return res.status(404).json({ message: 'Not found' })
  }
  res.status(200).json({ message: ' deleted' })
})

router.patch('/:contactId', patchContactValidation, async (req, res, next) => {
  const contacts = await updateContact(req.params.contactId, req.body)
  res.status(200).json({ contacts })
})

module.exports = router
