const mongoose = require("mongoose")

const employerSchema = new mongoose.Schema({
    employerId: {
        type: mongoose.Types.ObjectId,
        ref: "user",
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    companyName: {
        type: String,
    },
    location: {
        type: String,
    },
    logo: {
        type: String,
    },
    desc: {
        type: String,
    },
    size: {
        type: String,
    },
    estYear: {
        type: Date,
    },
    phone: {
        type: Number,
    },
}, { timestamps: true });

module.exports = mongoose.model("Employer", employerSchema);    