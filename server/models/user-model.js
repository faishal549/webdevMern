const mongoose = require("mongoose")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


const userRegistrationSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
})

// hashing the password

userRegistrationSchema.pre("save", async function (next) {
    const salt = 10;
    if (!this.isModified("password")) {
        next();
    }
    const hash_password = await bcrypt.hash(this.password, salt)
    this.password = hash_password

    next();
})

// comparing hashing password 

userRegistrationSchema.methods.comparePassword = async function (password) {

    return await bcrypt.compare(password, this.password)

}
// generate Token

userRegistrationSchema.methods.generateToken = async function () {
    try {
        const token = jwt.sign({
            userId: this._id.toString(),
            email: this.email,
            isAdmin: this.isAdmin
        },
            process.env.SECRET_KEY,
            {
                expiresIn: "30d"
            }

        )
        return token;
    } catch (error) {
        res.status(500).json({ msg: "internal server error" })
    }
}

const User = new mongoose.model("User", userRegistrationSchema)



module.exports = User;