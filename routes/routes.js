const express = require('express')
const router = express.Router()
const controllers = require('./../controllers/controllers')

router.get('/list', controllers.list)
router.put('/list', controllers.list)

router.get('/lists', controllers.lists)
router.post('/lists', controllers.lists)
router.put('/lists', controllers.lists)

router.put('/item', controllers.item)

module.exports = router
