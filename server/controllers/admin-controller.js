const User = require("../models/user-model")
const Contact = require("../models/contact-model")
const getAllUser = async (req, res) => {
    try {
        const users = await User.find().select({ password: 0 })
        if (!users || users.length === 0) {
            return res.status(404).json({ message: 'User not found' })
        } else {
            return res.status(200).json(users)
        }


    } catch (error) {
        next(error)
    }

}


const getAllContact = async (req, res) => {
    try {
        const contacts = await Contact.find()
        if (!contacts || contacts.length === 0) {
            return res.status(404).json({ message: "Contact not found" })
        } else {
            return res.status(200).json(contacts)
        }
    } catch (error) {
        next(error)
    }
}

const deleteByContactsId = async (req, res) => {
    try {
        const id = req.params.id;
        await Contact.deleteOne({ _id: id })

    } catch (error) {
        next(error)
    }
}


const deleteById = async (req, res) => {
    try {
        const id = req.params.id;
        await User.deleteOne({ _id: id })


    } catch (error) {
        next(error)
    }
}

const singleUserById = async (req, res) => {
    try {
        const id = req.params.id;
        const singleUser = await User.findOne({ _id: id }, { password: 0 })
        return res.status(202).json(singleUser)
    } catch (error) {
        next(error)

    }
}

const updateUserById = async (req, res) => {
    try {
        const id = req.params.id;
        const updateData = req.body;
        const updatedUserData = await User.updateOne({ _id: id }, { $set: updateData })
        return res.status(200).json(updatedUserData)
    } catch (error) {
        next(error)

    }
}

module.exports = { getAllUser, getAllContact, deleteById, singleUserById, updateUserById, deleteByContactsId }