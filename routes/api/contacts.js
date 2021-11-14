const express = require('express')
const router = express.Router()
const Joi = require('joi')
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

router.post('/', async (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string()
      .alphanum()
      .min(1)
      .max(30)
      .required(),
    email: Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
    phone: Joi.string().required(),
  })
  const validationResult = schema.validate(req.body)
  if (validationResult.error) {
    return res.status(400).json({ status: validationResult.error.details })
  } else {
    const { name, email, phone } = req.body
    const contacts = await addContact(name, email, phone)
    res.status(201).json({ contacts })
  }
})

router.delete('/:contactId', async (req, res, next) => {
  const searchingId = await removeContact(req.params.contactId)
  if (searchingId === true) {
    return res.status(404).json({ message: 'Not found' })
  }
  res.status(200).json({ message: ' deleted' })
})

router.patch('/:contactId', async (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string()
      .alphanum()
      .min(1)
      .max(30)
      .optional(),
    email: Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
    phone: Joi.string().optional(),
  })
  const validationResult = schema.validate(req.body)
  if (validationResult.error) {
    return res.status(404).json({ status: validationResult.error.details })
  } else {
    const contacts = await updateContact(req.params.contactId, req.body)
    res.status(200).json({ contacts })
  }
})

module.exports = router
