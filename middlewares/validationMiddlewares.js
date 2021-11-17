const Joi = require('joi')

module.exports = {
  addContactValidation: (req, res, next) => {
    const schema = Joi.object({
      name: Joi.string()
        .alphanum()
        .min(1)
        .max(30)
        .required(),
      email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
      phone: Joi.string().required(),
    })
    const validationResult = schema.validate(req.body)
    if (validationResult.error) {
      return res.status(400).json({ status: validationResult.error.details })
    }
    next()
  },

  patchContactValidation: (req, res, next) => {
    const schema = Joi.object({
      name: Joi.string()
        .alphanum()
        .min(1)
        .max(30)
        .optional(),
      email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
      phone: Joi.string().optional(),
    })
    const validationResult = schema.validate(req.body)
    if (validationResult.error) {
      return res.status(404).json({ status: validationResult.error.details })
    }
    next()
  }
}
