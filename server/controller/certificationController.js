const asyncHandler = require("express-async-handler")
const Certification = require("../model/Certification")
const validator = require("validator");


exports.getCertification = asyncHandler(async (req, res) => {
    const result = await Certification.find()
    res.status(200).json({ message: "certification fetch success", result })
})
exports.addCertification = asyncHandler(async (req, res) => {
    const { name } = req.body;
    if (validator.isEmpty(name)) {
        return res.status(500).json({ message: "please enter Name" });
    }
    const result = await Certification.create(req.body)
    if (!result) {
        res.status(400).json({ message: "Certification Add Failed " });
    }
    res.status(201).json({ message: "Certification add success" })
})
exports.updateCrtification = asyncHandler(async (req, res) => {
    const { certId } = req.params
    const { name } = req.body;
    if (validator.isEmpty(name)) {
        return res.status(500).json({ message: "please enter Name" });
    }
    const result = await Certification.findByIdAndUpdate(certId, req.body)
    if (!result) {
        res.status(400).json({ message: "certification update Failed " });
    }
    res.status(200).json({ message: "certification update success" })
})
exports.deleteCertification = asyncHandler(async (req, res) => {
    const { certId } = req.params
    await Certification.findByIdAndDelete(certId)
    res.status(200).json({ message: "certification delete success" })
})