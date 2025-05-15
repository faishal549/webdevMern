const User = require("../models/user-model")
const bcrypt = require('bcrypt')
//------------------
// Home Logic
//------------------

const home = async (req, res) => {
  try {
    res.status(200).send('Welcome to home page')
  } catch (error) {
    res.Status(400).send({ msg: "page not found" })
  }
}
//------------------
//  Registration Logic
//------------------
const register = async (req, res) => {

  try {

    const { username, email, phone, password } = req.body;
    const isExist = await User.findOne({ email })
    if (isExist) {
      return res.status(400).json({ message: "email already exists" })
    }

    const userCreate = await User.create({ username, email, phone, password })

    return res.status(200).json({
      msg: userCreate,
      token: await userCreate.generateToken(),
      userId: userCreate._id.toString()
    })
  } catch (error) {
    return res.status(400).send({ msg: "page not found" })

  }
}

//------------------
//  Login  Logic
//------------------ 

const login = async (req, res) => {
  try {
    const { email, password } = req.body    // destructuring 
    const isEmailExist = await User.findOne({ email })
    if (!isEmailExist) {
      return res.status(400).json({ msg: "invalid credentials" })
    }
    const verifiedPassword = await isEmailExist.comparePassword(password)
    if (verifiedPassword) {

      return res.status(200).json({
        msg: "login successfully",
        token: await isEmailExist.generateToken(),
        userId: isEmailExist._id.toString()
      })
    } else {
      return res.status(400).json({ msg: "invalid credentials" })
    }
  } catch (error) {
    return res.status(500).json({ msg: "internal server error" })

  }
}

//------------------
//  User get  Logic
//------------------


const user = async (req, res) => {
  try {
    const userData = req.user
    return res.status(200).json({ userData })

  } catch (error) {
    return res.send(error)
  }
}
module.exports = { home, register, login, user }