const multer = require("multer");
const { v4: uuid } = require("uuid");
const path = require("path");
const fs = require("fs");

const resumeStorage = multer.diskStorage({
  filename: (req, file, cb) => {
    cb(null, uuid() + path.extname(file.originalname));
  },
  destination: (req, file, cb) => {
    if (!fs.existsSync("resume")) {
      fs.mkdirSync("resume");
    }
    cb(null, "resume");
  },
});

const uploadResume = multer({ storage: resumeStorage }).single("resume");

module.exports = { uploadResume };
