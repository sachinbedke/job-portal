const asyncHandler = require("express-async-handler");
const User = require("../model/User");
const { uploadResume } = require("../utils/resume");
const Resume = require("../model/Resume");
const fs = require("fs");
const PDF = require("pdfkit");
const PDFDocument = require("pdfkit-table");
const sendEmail = require("../utils/email");


exports.getUserResume = asyncHandler(async (req, res) => {

    const result = await Resume.findOne({ userId: req.body.userId }, { _id: 0, __v: 0, createdAt: 0, updatedAt: 0, userId: 0 })

    res.status(200).json({ message: "All resume Fetch Success", result })

})
exports.getAllResume = asyncHandler(async (req, res) => {
    const result = await Resume.find()

    res.status(200).json({ message: "All resume Fetch Success", result })

})



exports.createResume = asyncHandler(async (req, res) => {

    const result = await Resume.findOne({ userId: req.body.userId })

    await Resume.findByIdAndUpdate(result._id, req.body);

    return res.status(201).json({ message: "Resume Update successfully" });

})





exports.updateResume = asyncHandler(async (req, res) => {
    const { Id } = req.params;
    const { name,
        email,
        mobile,
        location,
        about,
        gender,
        skills,
        education, experience, certifications, projects, } = req.body

    await Resume.findByIdAndUpdate(Id, req.body)
    res.status(200).json({ message: "Resume Update Sucess" })

}
)

exports.deleteResume = asyncHandler(async (req, res) => {
    const { Id } = req.params
    await Resume.findByIdAndDelete(Id)
    res.status(200).json({ message: "Resume Delete Sucess" })
})
exports.downloadResume = asyncHandler(async (req, res) => {


    const result = await Resume.findOne({ userId: req.body.userId }, {
        "education._id": 0,
        "experience._id": 0,
        "certifications._id": 0,
        "projects._id": 0,
        "social._id": 0
    }).lean()
    console.log(result);
    const filterdResult = result

    if (result) {
        const doc = new PDFDocument()
        doc.pipe(fs.createWriteStream(`${result._id}.pdf`))
        doc.fontSize(35).text(result.name, {
            align: "center",
            valign: "center"
        })
        doc.fontSize(18).text(`${result.email} | ${result.mobile}`, {
            align: "center",
            valign: "center"
        })
        doc.fontSize(16).text(`${result.about}`)
        const x = result.skills.map(item => item)
            .toString()
            .split(",")
            .join(" | ")


        doc.fontSize(16).text(`SKILLS      ${x}`)

        const table = {
            title: "Education",
            headers: Object.keys(result.education[0]),
            rows: result.education.map(item => Object.values(item))

        }
        await doc.table(table, {
            columnsSize: [200, 100, 100]
        })
        const exptable = {
            title: "Experiance",
            headers: Object.keys(result.experience[0]),
            rows: result.experience.map((item) => Object.values(item)),
        };

        await doc.table(exptable, {
            coloumnSize: [200, 100, 100],
        });
        const projectstable = {
            title: "Project",
            headers: Object.keys(result.projects[0]),
            rows: result.projects.map(item => Object.values(item))

        }
        await doc.table(projectstable, {
            columnsSize: [200, 100, 100]
        })
        const certificationstable = {
            title: "Certifications",
            headers: Object.keys(result.certifications[0]),
            rows: result.certifications.map(item => Object.values(item))

        }
        await doc.table(certificationstable, {
            columnsSize: [200, 100, 100]
        })
        const socialtable = {
            title: "Social",
            headers: Object.keys(result.social[0]),
            rows: result.social.map(item => Object.values(item))

        }
        await doc.table(socialtable, {
            columnsSize: [200, 100, 100]
        })
        doc.end()
    }

    await sendEmail({ to: result.email, subject: "DownLoad Resume", message: "Find Attachement for resume", attachment: `${result._id}.pdf` })

    res.status(200).json({ message: "Resume Download Sucess" })
})

