const asyncHandler = require("express-async-handler");
const User = require("../model/User");
const { uploadResume } = require("../utils/resume");

exports.getUsers = asyncHandler(async (req, res) => {
  const result = await User.find();
  res.status(200).json({ message: "Users Find Success", result });
});



exports.addResume = asyncHandler(async (req, res) => {
  const { userId } = req.params;
  uploadResume(req, res, async (err) => {
    if (err) {
      return res
        .status(400)
        .json({ message: err.message || "Unable To Upload Resume" });
    }
    await User.findByIdAndUpdate(userId, {
      ...req.body,
      resume: req.file.filename,
    });

    res.status(200).json({ message: "Resume Added success" });
  });
});

exports.active = asyncHandler(async (req, res) => {
  const { userId } = req.params;
  await User.findByIdAndUpdate(userId, req.body, {
    runValidators: true,
  });
  res.status(201).json({ message: "Activity Update Success" });
});
