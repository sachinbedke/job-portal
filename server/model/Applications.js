const mongoose = require("mongoose")



const applicationSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: "user"
    },
    jobId: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: "job"
    },
    status: {
        type: String,
        default: "pending",
        enum: ["rejected", "pending", "shortlist"]

    }
})


module.exports = mongoose.model("aplications", applicationSchema)