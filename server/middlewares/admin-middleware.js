const adminMiddleware = (req, res, next) => {
  try {

    const adminRole = req.user.isAdmin
    if (!adminRole) {
      return res.status(403).json({ message: "Access denied user is not admin" })
    }
    // res.status(202).json(req.user.isAdmin)


    next()
  } catch (error) {
    next(error)
  }
}

module.exports = adminMiddleware;