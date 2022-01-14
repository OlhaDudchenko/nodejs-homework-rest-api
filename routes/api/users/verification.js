const express = require('express')
const router = express.Router()
const { asyncWrapper } = require('../../../helpers/apiHelpers')
const VerifyController = require('../../../controllers/verify/VerifyController')

router.get('/verify/:verificationToken', asyncWrapper((req, res, next) => VerifyController.verify(req, res, next)))
router.post('/verify', asyncWrapper((req, res, next) => VerifyController.resendVerification(req, res, next)))
router.post('/forgot_password', asyncWrapper((req, res, next) => VerifyController.forgotPassword(req, res, next)))

module.exports = router
