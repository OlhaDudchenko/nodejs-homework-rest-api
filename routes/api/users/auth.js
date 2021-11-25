const express = require('express')
const router = express.Router()
const { asyncWrapper } = require('../../../helpers/apiHelpers')
const { authMiddleware } = require('../../../middlewares/authMiddleware')
const { registrationController, loginController, logoutController, currentUserController, subscriptionController } = require('../../../controllers/auth')

router.post('/signup', asyncWrapper(registrationController))
router.post('/login', asyncWrapper(loginController))
router.post('/logout', authMiddleware, asyncWrapper(logoutController))
router.get('/current', authMiddleware, asyncWrapper(currentUserController))
router.patch('/:userId/subscription', authMiddleware, asyncWrapper(subscriptionController))

module.exports = router
