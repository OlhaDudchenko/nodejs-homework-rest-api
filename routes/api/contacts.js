const express = require('express')
const router = express.Router()
const { addContactValidation, patchContactValidation } = require('../../middlewares/validationMiddlewares')
const { getContacts, getContactsById, deleteContacts, patchContacts, postContacts } = require('../../controllers/contacts')

router.get('/', getContacts)

router.get('/:contactId', getContactsById)

router.post('/', addContactValidation, postContacts)

router.delete('/:contactId', deleteContacts)

router.patch('/:contactId', patchContactValidation, patchContacts)

module.exports = router
