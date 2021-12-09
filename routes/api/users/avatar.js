const express = require('express')
const router = express.Router()
const { asyncWrapper } = require('../../../helpers/apiHelpers')
const { authMiddleware } = require('../../../middlewares/authMiddleware')
const AvatarController = require('../../../controllers/avatar/avatarController')
const { upload } = require('../../../middlewares/uploadMiddleware')

router.patch('/avatars', authMiddleware, upload.single('avatar'),

  asyncWrapper((req, res, next) => AvatarController.avatar(req, res, next)))

module.exports = router
