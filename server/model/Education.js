const mongoose = require("mongoose")



const educationSchema = new mongoose.Schema({
    degree: {
        type: String,
        required: true
    },
    percent: {
        type: String,
        required: true
    },
    userId: {
        type: mongoose.Types.ObjectId,
        ref: "user",
        // required: true
    }
}, { timestamps: true })


module.exports = mongoose.model("education", educationSchema)