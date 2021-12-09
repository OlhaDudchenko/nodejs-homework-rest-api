const { avatar } = require('../../services/avatar')

class AvatarController {
  constructor() {
    this.avatar = this.avatar.bind(this)
  }

  async avatar(req, res, next) {
    const image = req.file
    const id = req.user._id
    const user = await avatar(id, image)
    res.status(200).json({ avatarURL: user.avatarURL })
  }
}

module.exports = new AvatarController()
