const mongoose = require("mongoose")

const jobScheama = new mongoose.Schema({

    company: {
        type: mongoose.Types.ObjectId,
        ref: "Employer",
        required: true
    },
    title: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    closingDate: {
        type: Date,
        required: true
    },
    hiringLocation: {
        type: String,
        required: true
    },
    salary: {
        type: Number,
        required: true
    },
    level: {
        type: String,
        required: true
    },
    qualification: {
        type: String,
        required: true
    },
    experience: {
        type: String,
        required: true
    },
    quantity: {
        type: String,
        required: true
    },
    type: {
        type: String,
        default: "offline",
        enum: ["offline", "online", "hybrid"],

    },
    skills: {
        type: [String],
        required: true
    },

}, { timestamps: true })

module.exports = mongoose.model("job", jobScheama)