const jwt = require('jsonwebtoken')
const User = require("../models/user-model")

const authMiddleware = async (req, res, next) => {

  const token = req.header("Authorization")
  if (!token) {
    return res.status(401).json({ msg: "Unauthorized http Token not provided" })
  }

  const jwtToken = token.replace("Bearer", "").trim()



  try {
    const isVerify = jwt.verify(jwtToken, process.env.SECRET_KEY)
    //console.log("isVerify", isVerify)
    const userData = await User.findOne({ email: isVerify.email }).select({ password: 0 })
    // console.log(userData)
    // creating custom properties
    req.user = userData;
    req.token = token;
    req.userId = userData._id;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized http Token not provided" })


  }





}

module.exports = authMiddleware;