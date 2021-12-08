const supertest = require('supertest')
const path = require('path')
require('dotenv').config()
const app = require('../app')
const request = supertest(app)
const fs = require('fs')
const { User } = require('../db/userModal')
const files = fs.readdirSync('image')
const chosenFile = files[Math.floor(Math.random() * files.length)]
const mongoose = require('mongoose')

beforeAll(async () => {
  const url = process.env.TEST_DB_HOST
  await mongoose.connect(url, { useNewUrlParser: true })
})
describe('Test user services', () => {
  const auth = {}
  it('Should save user to database', async () => {
    const res = await request.post('/users/signup').send({
      email: 'mango@gmail.com',
      password: 'mango123',
    })
    expect(res.statusCode).toEqual(201)
  })

  it('Should login user to server', async () => {
    await loginUser(auth)
  })

  it('Should change user avatar', async () => {
    const res = await request.patch('/users/avatars').set('Authorization', `Bearer ${auth.token}`)
      .attach('avatar', path.resolve(`image/${chosenFile}`))
    expect(res.body.avatarURL).toEqual(expect.any(String))
    expect(res.statusCode).toEqual(200)
  })

  it('Get unauthorization error when change user avatar', async () => {
    const token = null
    const res = await request.patch('/users/avatars').set('Authorization', `Bearer ${token}`)

    expect(res.statusCode).toEqual(401)
  })
})
async function loginUser (auth) {
  const res = await request
    .post('/users/login')
    .send({
      email: 'mango@gmail.com',
      password: 'mango123'
    })
  expect(res.statusCode).toEqual(200)
  expect(res.body.token).toBeDefined()
  expect(res.body.user.email).toEqual(expect.any(String))
  expect(res.body.user.subscription).toEqual(expect.any(String))
  auth.token = res.body.token
}

afterAll(async () => {
  await User.deleteMany({}).then(function () { console.log('Data deleted') }).catch(function (error) { console.log(error) })
  await mongoose.connection.close()
})
