const express = require('express')
const router = express.Router()
const { asyncWrapper } = require('../../../helpers/apiHelpers')
const { authMiddleware } = require('../../../middlewares/authMiddleware')
const AuthController = require('../../../controllers/auth/authController')

router.post('/signup', asyncWrapper((req, res, next) => AuthController.register(req, res, next)))
router.post('/login', asyncWrapper((req, res, next) => AuthController.logIn(req, res, next)))
router.post('/logout', authMiddleware, asyncWrapper((req, res, next) => AuthController.logOut(req, res, next)))
router.get('/current', authMiddleware, asyncWrapper((req, res, next) => AuthController.current(req, res, next)))
router.patch('/:userId/subscription', authMiddleware, asyncWrapper((req, res, next) => AuthController.subscription(req, res, next)))

module.exports = router
