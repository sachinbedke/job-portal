const asyncHandler = require("express-async-handler");
const validator = require("validator");
const Skills = require("../model/Skills");

// get
exports.getSkills = asyncHandler(async (req, res) => {
  const result = await Skills.find();
  if (!result) {
    res.status(500).json({ message: "Skills Unavailable" });
  }
  res.status(200).json({ message: "Skills Fetched Success", result });
});
// getbyId
exports.getSkillsById = asyncHandler(async (req, res) => {
  const { userId } = req.params;
  const result = await Skills.find({ userId });
  if (!result) {
    return res.status(500).json({ message: "User Skills not found" });
  }
  res.status(200).json({ message: "Skills Fetched Success Of User", result });
});
// add
exports.addSkills = asyncHandler(async (req, res) => {
  const { name, level } = req.body;
  if (validator.isEmpty(name)) {
    return res.status(500).json({ message: "please enter Name" });
  }
  if (validator.isEmpty(level)) {
    return res.status(500).json({ message: "please enter level" });
  }
  const result = await Skills.create(req.body);
  if (!result) {
    res.status(400).json({ message: "Skills Add Failed " });
  }
  res.status(200).json({ message: "Skills Add Success" });
});
// delete
exports.deleteSkills = asyncHandler(async (req, res) => {
  const { skillId } = req.params;
  const deletedSkill = await Skills.findByIdAndDelete(skillId);
  if (!deletedSkill) {
    return res.status(404).json({ message: "Skill not found" });
  }
  res.status(200).json({ message: "Skills deleted Success" });
});
// update
exports.updateSkills = asyncHandler(async (req, res) => {
  const { skillId } = req.params;
  const { name, level } = req.body;

  if (validator.isEmpty(name)) {
    return res.status(400).json({ message: "Please enter a new Name" });
  }
  if (validator.isEmpty(level)) {
    return res.status(400).json({ message: "Please enter a new LEVEL" });
  }
  const updatedSkill = await Skills.findByIdAndUpdate(skillId, { name, level });
  if (!updatedSkill) {
    return res.status(404).json({ message: "Skill not found" });
  }
  res.status(200).json({ message: "Skills Update Success" });
}); 
