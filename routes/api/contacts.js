const express = require('express')
const router = express.Router()
const { asyncWrapper } = require('../../helpers/apiHelpers')
const { addContactValidation, patchContactValidation } = require('../../middlewares/validationMiddlewares')
// const { getContactsController, getContactsByIdController, deleteContactsController, putContactsController, postContactsController, patchContactsController } = require('../../controllers/contacts')
const { authMiddleware } = require('../../middlewares/authMiddleware')
const ContactController = require('../../controllers/contacts/contactController')

router.use(authMiddleware)
router.get('/', asyncWrapper((req, res, next) => ContactController.getAll(req, res, next)))

router.get('/:contactId', asyncWrapper((req, res, next) => ContactController.getById(req, res, next)))

router.post('/', addContactValidation, asyncWrapper((req, res, next) => ContactController.add(req, res, next)))

router.delete('/:contactId', asyncWrapper((req, res, next) => ContactController.delete(req, res, next)))

router.put('/:contactId', addContactValidation, asyncWrapper((req, res, next) => ContactController.put(req, res, next)))

router.patch('/:contactId/favorite', patchContactValidation, asyncWrapper((req, res, next) => ContactController.patch(req, res, next)))

module.exports = router
