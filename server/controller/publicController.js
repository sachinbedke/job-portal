const asyncHandler = require("express-async-handler")
const Jobs = require("../model/Jobs")
const Employer = require("../model/Employer")

exports.getAllPublicJobs = asyncHandler(async (req, res) => {
    const { limit = 5, page = 0 } = req.query
    const total = await Jobs.countDocuments()
    const result = await Jobs.find().populate("company", { companyName: 1, logo: 1 }).skip(limit * page).limit(limit)

    res.status(200).json({ message: "All Job Fetch Success", result, total })

})
exports.getPublicJobDetail = asyncHandler(async (req, res) => {
    const { jobId } = req.params

    const result = await Jobs.findById(jobId).populate("company")
    const companyData = await Employer.findById(result.company)

    res.status(200).json({
        message: "Job Detail Fetch Success", result
    })

})