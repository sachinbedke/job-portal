const mongoose = require("mongoose")

const projectsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    userId: {
        type: mongoose.Types.ObjectId,
        // ref: "user",
        required: true
    }
}, { timestamps: true })

module.exports = mongoose.model("projects", projectsSchema)