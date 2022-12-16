const express = require('express')
const router = express.Router()

const home = require('../controllers/home')
const info = require('../controllers/info')
const register = require('../controllers/register')
const contact = require('../controllers/contact')

router.get('/', home.home)
router.get('/info', info.info)
router.get('/register', register.register)
router.get('/contact', contact.contact)

module.exports = router