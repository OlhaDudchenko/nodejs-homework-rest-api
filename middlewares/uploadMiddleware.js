const multer = require('multer')
const path = require('path')
const { stat } = require('fs/promises')
const { WrongParametersError } = require('../helpers/errors')

const storage = multer.diskStorage({

  destination: (req, file, cb) => {
    cb(null, path.resolve('./tmp'))
  },
  filename: (req, file, cb) => {
    const [filename, extension] = file.originalname.split('.')
    cb(null, `${filename}.${extension}`)
  }
})

const upload = multer({
  storage: storage,
  fileFilter: async (req, file, cb) => {
    try {
      const filename = await stat(`./tmp/${file.originalname}`)
      if (filename) {
        cb(new WrongParametersError('The requested file could not be uploaded because a file with the same name already exists'), false)
      }
    } catch (error) {
      cb(null, true)
    }
  }
})

module.exports = {
  upload
}
