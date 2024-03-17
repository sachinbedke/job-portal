const mongoose = require("mongoose")
const certificationSchame = new mongoose.Schema({
    userId: {
        type: mongoose.Types.ObjectId,
        // ref: "user",
        required: true
    },
    name: {
        type: String,
        required: true
    },


}, { timestamps: true })


module.exports = mongoose.model("certification", certificationSchame)