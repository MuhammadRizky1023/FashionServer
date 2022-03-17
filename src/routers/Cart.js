const { Router } = require('express')

const router = Router()

const {addCart, updateCart, deleteCart, getCart} = require('../Controllers/Cart')

router.get('/')
router.post('/')
router.put('/')
router.delete('/')
module.exports = router