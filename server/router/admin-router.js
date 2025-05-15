const express = require('express')
const router = express.Router()
const { getAllUser, getAllContact, deleteById, singleUserById, updateUserById, deleteByContactsId } = require("../controllers/admin-controller")
const authMiddleware = require("../middlewares/auth-middleware")
const adminMiddleware = require("../middlewares/admin-middleware")
// here we adding middleware just to check user login or not 
router.route('/users').get(authMiddleware, adminMiddleware, getAllUser)
router.route('/contacts').get(authMiddleware, adminMiddleware, getAllContact)
router.route('/users/:id').get(authMiddleware, adminMiddleware, singleUserById)
router.route('/users/update/:id').put(authMiddleware, adminMiddleware, updateUserById)

router.route("/users/delete/:id").delete(authMiddleware, adminMiddleware, deleteById)
router.route("/contacts/delete/:id").delete(authMiddleware, adminMiddleware, deleteByContactsId)

module.exports = router;
