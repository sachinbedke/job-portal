const asyncHandler = require("express-async-handler")
const validator = require("validator")
const Applications = require("../model/Applications")

exports.getAllApplications = asyncHandler(async (req, res) => {
    const result = await Applications.find({ userId: req.body.userId }).populate("jobId")
    res.json({ message: "Application get Succes", result })
})
exports.getUserAllApplications = asyncHandler(async (req, res) => {
    const { jobId } = req.query
    const result = await Applications.findOne({ userId: req.body.userId, jobId })
    if (!result) {
        res.status(400).json({ message: "Not Applyed" })
    }
    res.json({ message: "Application + Succes", result })
})

exports.addApplications = asyncHandler(async (req, res) => {
    const { jobId, userId } = req.body
    if (validator.isEmpty(jobId) || validator.isEmpty(userId)) {
        return res.status(400).json({ message: "All fields are required" })
    }
    const result = await Applications.findOne(req.body)
    if (result) {
        return res.status(400).json({ message: "Already applied" })
    }
    await Applications.create({ jobId, userId })
    res.status(201).json({ message: "Application add success" })
})


exports.deleteApplications = asyncHandler(async (req, res) => {
    const { applicationId } = req.params
    await Applications.findByIdAndDelete(applicationId)
    res.status(200).json({ message: "Application delete success" })
})



exports.updateApplications = asyncHandler(async (req, res) => {
    const { jobId, userId } = req.body
    const { applicationId } = req.params
    const updatedObject = {}
    if (jobId) {
        updatedObject.jobId = jobId
    }
    if (userId) {
        updatedObject.userId = userId
    }

    await Applications.findByIdAndUpdate(applicationId, updatedObject)
    res.status(200).json({ message: "Application update success" })
})


