const mongoose = require("mongoose")
// const URI = "mongodb://127.0.0.1:27017/"
const URI = process.env.MONGODB_STR;
const connectDB = async () => {
  try {
    await mongoose.connect(URI)
    console.log(" database connection is successful...")

  } catch (error) {

    console.error("database connection failed", error)
    process.exit(1);
  }
}

module.exports = connectDB;