const express = require('express')
const router = express.Router()
const { asyncWrapper } = require('../../helpers/apiHelpers')
const { addContactValidation, patchContactValidation } = require('../../middlewares/validationMiddlewares')
const { getContactsController, getContactsByIdController, deleteContactsController, putContactsController, postContactsController, patchContactsController } = require('../../controllers/contacts')
const { authMiddleware } = require('../../middlewares/authMiddleware')

router.use(authMiddleware)
router.get('/', asyncWrapper(getContactsController))

router.get('/:contactId', asyncWrapper(getContactsByIdController))

router.post('/', addContactValidation, asyncWrapper(postContactsController))

router.delete('/:contactId', asyncWrapper(deleteContactsController))

router.put('/:contactId', addContactValidation, asyncWrapper(putContactsController))

router.patch('/:contactId/favorite', patchContactValidation, asyncWrapper(patchContactsController))

module.exports = router
