const mongoose = require("mongoose");

const SkillsSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Types.ObjectId,
      //   required: true,
      ref: "user",
    },
    name: {
      type: String,
      required: true,
    },
    level: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("skills", SkillsSchema);
