class PhonebookError extends Error {
  constructor(message) {
    super(message)
    this.status = 400
  }
}

class ValidationError extends PhonebookError {
  constructor(message) {
    super(message)
    this.status = 400
  }
}

class NotFoundError extends PhonebookError {
  constructor(message) {
    super(message)
    this.status = 404
  }
}

class WrongParametersError extends PhonebookError {
  constructor(message) {
    super(message)
    this.status = 400
  }
}

class RegistrationConflictError extends PhonebookError {
  constructor(message) {
    super(message)
    this.status = 409
  }
}

class NotAuthorizedError extends PhonebookError {
  constructor(message) {
    super(message)
    this.status = 401
  }
}

module.exports = {
  PhonebookError,
  ValidationError,
  NotFoundError,
  WrongParametersError,
  RegistrationConflictError,
  NotAuthorizedError
}
