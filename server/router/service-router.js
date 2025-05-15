const express = require('express')
const router = express.Router();
const service = require("../controllers/service-controller")
const authMiddleware = require("../middlewares/auth-middleware")



router.route('/service').get(authMiddleware, service)



module.exports = router;