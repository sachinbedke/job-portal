const mongoose = require("mongoose")
const validator = require("validator")
const asyncHandler = require("express-async-handler")
const Education = require("../model/Education")


exports.getUserEducation = asyncHandler(async (req, res) => {
    const result = await Education.find()
    res.status(200).json({ message: "User education Fetch Success", result })
})



exports.addEducation = asyncHandler(async (req, res) => {
    const { degree, percent, userId } = req.body;

    // const result = await User.findOne({ userId })

    // if (!result) {
    //     return res.status(400).json({ message: "userId is required" })
    // }

    if (validator.isEmpty(degree) && validator.isEmpty(percent)) {
        return res.status(400).json({ message: "All Fields Are Required" });
    }

    if (validator.isEmpty(degree)) {
        return res.status(400).json({ message: "Degree is required" });
    }

    if (validator.isEmpty(percent)) {
        return res.status(400).json({ message: "Percent is required" });
    }

    // Degree Length Validation
    if (degree.length < 2 || degree.length > 100) {
        return res.status(400).json({ message: "Degree length should be between 2 and 100 characters" });
    }

    // Percent Range Validation
    const percentNumber = parseFloat(percent);

    if (isNaN(percentNumber) || percentNumber < 0 || percentNumber > 100) {
        return res.status(400).json({ message: "Percent should be a valid number between 0 and 100" });
    }

    // Additional Custom Validation
    const forbiddenCharacters = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/;

    if (forbiddenCharacters.test(degree)) {
        return res.status(400).json({ message: "Degree contains forbidden characters" });
    }

    await Education.create({ degree, percent })
    // await Education.create({ degree, percent, userId: result_id })

    res.status(201).json({ message: "User education Fetch Success" });
});




exports.deleteEducation = asyncHandler(async (req, res) => {
    const { educationId } = req.params

    if (!validator.isMongoId(educationId)) {
        return res.status(400).json({ message: "Invalid Education Id" })
    }

    await Education.findByIdAndDelete(educationId)

    res.status(200).json({ message: "User education delete success" })
})



exports.updateEducation = asyncHandler(async (req, res) => {

    const { educationId } = req.params

    if (!validator.isMongoId(educationId)) {
        return res.status(400).json({ message: "Invalid Education Id" })
    }

    await Education.findByIdAndUpdate(educationId, req.body)

    res.status(200).json({ message: "User education update success" })
})