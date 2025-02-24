const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
  password: {
    type: String,
    required: [true, 'Password is required'],
    minlength: 6
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
  },
  subscription: {
    type: String,
    enum: ['starter', 'pro', 'business'],
    default: 'starter',
  },
  token: {
    type: String,
    default: null,
  },
  avatarURL: String,

  verify: {
    type: Boolean,
    default: false,
  },
  verifyToken: {
    type: String,
    required: [true, 'Verify token is required'],
  },

}, { versionKey: false, timestamps: true })

userSchema.pre('save', async function() {
  if (this.isNew || this.isModified) {
 
    this.password = await bcrypt.hash(this.password, 10)
  }
})
userSchema.pre('findOneAndUpdate', function (next) {
  this.options.runValidators = true
  next()
})

const User = mongoose.model('User', userSchema)

module.exports = {
  User
}
