const asyncHandler = require("express-async-handler")
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const validator = require("validator");
const Employer = require("../model/Employer");
const path = require('path');
const fs = require('fs').promises;
const { uploadlogo } = require("../utils/upload");
const { OAuth2Client } = require("google-auth-library")
const Gallery = require("../model/Gallery");
const Jobs = require("../model/Jobs");
const Applications = require("../model/Applications");
const Resume = require("../model/Resume");
const sendEmail = require("../utils/email");


exports.getEmployerDetail = asyncHandler(async (req, res) => {

    const result = await Employer.findOne({ employerId: req.params.id });
    if (!result) {
        return res.status(400).json({ message: "Employer Detail Fetch Fail" })
    }
    res.json({ message: "Employer Datail Fetch Success", result });
})
exports.updateStatus = asyncHandler(async (req, res) => {


    const result = await Applications.findByIdAndUpdate(req.params.id, { status: req.body.status }, { new: true }).populate("userId")
    await sendEmail({
        to: result.userId.email, subject: `use are ${req.body.status} for job id ${req.params.id}`,
        message: req.body.status === "rejected" ? "tata bye bye" : "Welcome"
    })

    res.status(200).json({ message: "Status Update Success" });
})

exports.updateEmployer = asyncHandler(async (req, res) => {
    const { id } = req.params
    uploadlogo(req, res, async (err) => {
        if (err) {
            return res.status(400).json({ message: err.message })
        }
        const { phone, companyName, location, desc, size, estYear, name, } = req.body
        console.log(req.body);
        if ((!phone) || (phone && !validator.isMobilePhone(phone, 'any'))) {
            return res.status(400).json({ message: "Invalid  phone number format" })
        }
        // if (!companyName || !location || !desc || !size || !estYear) {
        //     return res.status(400).json({ message: "Please provide all required information" });
        // }
        // const isPhone = phone && validator.isMobilePhone(phone, 'any', { strictMode: false });
        // const employerExistsByPhone = isPhone ? await Employer.findOne({ phone }) : null;
        // if (employerExistsByPhone) {
        //     return res.status(400).json({ message: "phone number already registered" });
        // }
        let employerId
        const token = req.cookies.auth

        jwt.verify(token, process.env.JWT_KEY, async (err, decode) => {
            employerId = decode.userId
            await Employer.create({ ...req.body, logo: req.file.filename, employerId })
            return res.status(201).json({ message: "Employer registered successfully" });
        })
    })
})

exports.getAllJobs = asyncHandler(async (req, res) => {
    const x = await Employer.findOne({ employerId: req.body.userId })

    const result = await Jobs.find({ company: x._id })

    res.status(200).json({ message: "All Job Fetch Success", result })

})
exports.getApplicant = asyncHandler(async (req, res) => {
    const result = await Applications.find({ jobId: req.params.jobId }).populate("userId")

    res.status(200).json({ message: "All Applicant Fetch Success", result })

})
exports.getApplicantResume = asyncHandler(async (req, res) => {


    const result = await Resume.findOne({ userId: req.params.userId })

    res.status(200).json({ message: "All Applicant Resume Fetch Success", result })

})

exports.addJob = asyncHandler(async (req, res) => {
    const { title, role, desc, closingDate, hiringLocation, salary, level,
        qualification, experience, quantity, type, skills } = req.body

    if (!title || !role || !desc || !closingDate || !hiringLocation || !salary || !level || !qualification ||
        !experience || !quantity || !type || !skills) {
        return res.status(400).json({ message: "Please Enter All Information" })
    }
    const x = await Employer.findOne({ employerId: req.body.userId })

    await Jobs.create({ ...req.body, company: x._id })
    // const arr = []
    // for (let i = 0; i < 25; i++) {
    //     arr.push({
    //         company: "65e1e2e4b5d12b007d7b2222",
    //         title: `osftware developer ${i}`,
    //         role: "fullstack",
    //         desc: "the is dsc",
    //         closingDate: "15-03-2024",
    //         hiringLocation: "pune",
    //         salary: "25000",
    //         level: "jr",
    //         qualification: "bcs",
    //         experience: "44 year",
    //         quantity: "3",
    //         type: "offline  ",
    //     })

    // }
    // await Jobs.create(arr)
    res.status(200).json({ message: "Job Add Sucess" })
})
exports.updateJob = asyncHandler(async (req, res) => {

    const { jobId } = req.params
    const { role, desc, closingDate, hiringLocation, salary, level,
        qualification, experience, quantity, type, skills } = req.body

    if (!role || !desc || !closingDate || !hiringLocation || !salary || !level || !qualification ||
        !experience || !quantity || !type || !skills) {
        return res.status(400).json({ message: "Please Enter All Information" })
    }


    await Jobs.findByIdAndUpdate(jobId, req.body)
    res.status(200).json({ message: "Job Update Sucess" })
})
exports.deleteJob = asyncHandler(async (req, res) => {

    const { jobId } = req.params



    await Jobs.findByIdAndDelete(jobId)
    res.status(200).json({ message: "Job Delete Sucess" })
})