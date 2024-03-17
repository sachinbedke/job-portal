const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    photo: {
      type: String,
      required: true
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    role: {
      type: String,
      default: "user",
      enum: ["user", "emp", "admin"]
    },
    resume: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("user", userSchema);
