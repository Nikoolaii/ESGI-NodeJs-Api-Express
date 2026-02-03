const express = require('express')
const router = express.Router()
const messageController = require('./message.controller')

router.get('/', (req, res) => {
  messageController.getAll(req, res)
})

router.get('/:id', (req, res) => {
  messageController.getById(req, res)
})

router.post('/', (req, res) => {
  messageController.create(req, res)
})

router.put('/:id', (req, res) => {
  messageController.update(req, res)
})

router.delete('/:id', (req, res) => {
  messageController.delete(req, res)
})

module.exports = router