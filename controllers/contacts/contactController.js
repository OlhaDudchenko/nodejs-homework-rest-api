const { getContacts } = require('../../services/contacts')
const { getContactsById } = require('../../services/contacts')
const { postContacts } = require('../../services/contacts')
const { patchContacts } = require('../../services/contacts')
const { putContacts } = require('../../services/contacts')
const { deleteContacts } = require('../../services/contacts')

class ContactController {
  constructor() {
    this.getAll = this.getAll.bind(this)
    this.getById = this.getById.bind(this)
    this.add = this.add.bind(this)
    this.patch = this.patch.bind(this)
    this.put = this.put.bind(this)
    this.delete = this.delete.bind(this)
  }

  async getAll(req, res, next) {
    const { _id: owner } = req.user
    const { page, limit, favorite } = req.query
    const options = {
      page: parseInt(page) || 1,
      limit: parseInt(limit) || 20,
      select: { __v: 0 },
    }
    const contacts = await getContacts({ owner }, options, favorite)
    res.status(200).json({ contacts })
  }

  async getById(req, res, next) {
    const { _id: owner } = req.user
    const id = req.params.contactId
    const contact = await getContactsById(id, owner)
    res.status(200).json({ contact })
  }

  async add(req, res, next) {
    const { _id: owner } = req.user
    const { name, email, phone, favorite } = req.body
    const contact = await postContacts({ name, email, phone, favorite }, owner)
    res.status(201).json({ contact })
  }

  async put(req, res, next) {
    const { _id: owner } = req.user
    const { name, email, phone } = req.body
    const id = req.params.contactId
    const contact = await putContacts(id, { name, email, phone }, owner)
    res.status(200).json({ contact })
  }

  async patch(req, res, next) {
    const { _id: owner } = req.user
    const id = req.params.contactId
    const { favorite } = req.body
    const contact = await patchContacts(id, { favorite }, owner)
    res.status(200).json({ contact })
  }

  async delete(req, res, next) {
    const { _id: owner } = req.user
    const id = req.params.contactId
    await deleteContacts(id, owner)
    res.status(200).json({ message: ' deleted' })
  }
}

module.exports = new ContactController()
