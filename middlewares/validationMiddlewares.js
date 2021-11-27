const Joi = require('joi')
Joi.objectId = require('joi-objectid')(Joi)
const { ValidationError } = require('../helpers/errors')

module.exports = {
  addContactValidation: (req, res, next) => {
    const schema = Joi.object({
      name: Joi.string()
        .alphanum()
        .min(1)
        .max(30)
        .required(),
      email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'mail', 'ru'] } }),
      phone: Joi.string().required(),
      favorite: Joi.boolean(),
      owner: Joi.objectId(),
    })
    const validationResult = schema.validate(req.body)
    if (validationResult.error) {
      next(new ValidationError(validationResult.error.details[0].message))
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
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'mail', 'ru'] } }),
      phone: Joi.string().optional(),
      favorite: Joi.boolean(),
      owner: Joi.objectId(),
    })
    const validationResult = schema.validate(req.body)
    if (validationResult.error) {
      next(new ValidationError(validationResult.error.details[0].message))
    }
    next()
  }
}
