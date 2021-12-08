
const { authMiddleware } = require('../middlewares/authMiddleware')
const { NotAuthorizedError } = require('../helpers/errors')
const { User } = require('../db/userModal')
const jwt = require('jsonwebtoken')
require('dotenv').config()

describe('Auth middleware test', () => {
  it('Should call next and add user properties to req object', async () => {
    const user = { _id: '1' }
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET)
 
    const mReq = {
      headers: {
        authorization: `Bearer ${token}`
      }
    }
    const mRes = {}
    const mockNext = jest.fn()

    jest.spyOn(User, 'findOne').mockImplementationOnce(() => (user))
      
    await authMiddleware(mReq, mRes, mockNext)
    expect(mReq.token).toEqual(token)
    expect(mockNext).toHaveBeenCalled()
  })

  it('Should call next() with error in case authorization header is absent', async() => {
    const mReq = {
      headers: {}
    }
    const mRes = {}
    const mockNext = jest.fn()

   await authMiddleware(mReq, mRes, mockNext)
    expect(mockNext).toHaveBeenCalledWith(new NotAuthorizedError('Please, provide a token in request authorization header'))
  })

  it('Should call next() with error in case token is invalid', async() => {
    const token = null
    const mReq = {
      headers: {
        authorization: `Bearer ${token}`
      },
    }

    const mRes = {}
    const mockNext = jest.fn()

    await authMiddleware(mReq, mRes, mockNext)

    expect(mockNext).toHaveBeenCalledWith(new NotAuthorizedError('Invalid token'))
  })
})
