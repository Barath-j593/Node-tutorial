const express = require('express')
const router = express.Router()

const {getallProductStatic,getallProducts} = require('../controllers/products')

router.route('/').get(getallProducts)
router.route('/static').get(getallProductStatic)

module.exports = router