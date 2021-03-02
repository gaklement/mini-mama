const express = require('express')
const router = express.Router()
const controllers = require('./../controllers/controllers')

router.get('/say-something', controllers.saySomething)
router.get('/lists', controllers.lists)
router.post('/lists', controllers.lists)

module.exports = router
