const express = require('express')
const router = express.Router();
const authMiddleware = require("../middlewares/auth-middleware")
const contactForm = require('../controllers/contact-controller')


router.route('/contact').post(contactForm)




module.exports = router;