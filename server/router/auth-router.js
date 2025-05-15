const express = require("express")
const router = express.Router();
const authController = require("../controllers/auth-controller");
const authMiddleware = require('../middlewares/auth-middleware')
const signupSchema = require("../validator/auth-validator");
const validator = require("../middlewares/validator-middleware");


router.route("/").get(authController.home)
router.route("/register").post(validator(signupSchema), authController.register)
router.route("/login").post(authController.login)
router.route("/user").get(authMiddleware, authController.user)


module.exports = router;  
