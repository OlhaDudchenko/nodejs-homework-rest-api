const Jimp = require('jimp')
const path = require('path')
const { v4: uuidv4 } = require('uuid')
const { unlink } = require('fs/promises')
const { User } = require('../../db/userModal')
const { WrongParametersError, NotAuthorizedError } = require('../../helpers/errors')

const avatar = async (id, image) => {
  try {
    if (!image) {
      throw new WrongParametersError('No file to upload')
    }
    const filename = uuidv4() + '_250x250_' + image.originalname
    const filePath = path.resolve(`public/avatars/${filename}`)
    const newImage = await Jimp.read(image.path)
    await newImage.resize(250, 250)
    await newImage.write(filePath)
    const filter = { _id: id }
    const update = { avatarURL: `http://localhost:${process.env.PORT}/avatars/${filename}` }
    const user = await User.findOneAndUpdate(filter, update, { new: true })
    await unlink(`tmp/${image.originalname}`)
    return user
  } catch (error) {
    throw new NotAuthorizedError('Not authorized')
  }
}

module.exports = avatar
