const asyncHandler = require("express-async-handler")
const Projects = require("../model/Projects")
const validator = require("validator");

exports.getProjects = asyncHandler(async (req, res) => {
    const result = await Projects.find()
    res.status(200).json({ message: "Projects fetch success", result })
})
exports.addProjects = asyncHandler(async (req, res) => {
    const { name, desc } = req.body;
    if (validator.isEmpty(name)) {
        return res.status(500).json({ message: "Please enter name" });
    }
    if (validator.isEmpty(desc)) {
        return res.status(500).json({ message: "Please enter desc" });
    }
    const result = await Projects.create(req.body)
    if (!result) {
        res.status(400).json({ message: "Projects add Failed " });
    }
    res.status(201).json({ message: "Projects add success" })
})
exports.updateProjects = asyncHandler(async (req, res) => {
    const { projectsId } = req.params
    const { name, desc } = req.body;
    if (validator.isEmpty(name)) {
        return res.status(500).json({ message: "Please enter name" });
    }
    if (validator.isEmpty(desc)) {
        return res.status(500).json({ message: "Please enter desc" });
    }
    const result = await Projects.findByIdAndUpdate(projectsId, req.body)
    if (!result) {
        res.status(400).json({ message: "Projects update Failed " });
    }
    res.status(200).json({ message: "Projects update success" })
})
exports.deleteProjects = asyncHandler(async (req, res) => {
    const { projectsId } = req.params
    await Projects.findByIdAndDelete(projectsId)
    res.status(200).json({ message: "Projects delete success" })
})
