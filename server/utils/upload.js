const { v4: uuid } = require("uuid")
const path = require("path")
const multer = require("multer")
const fs = require("fs")

const logoStorage = multer.diskStorage({
    filename: (req, file, cb) => {
        cb(null, uuid() + path.extname(file.originalname))
    },
    destination: (req, file, cb) => cb(null, "logo")
})



const galleryStorage = multer.diskStorage({
    filename: (req, file, cb) => {
        cb(null, uuid() + path.extname(file.originalname))
    },

    destination: (req, file, cb) => {
        if (!fs.existsSync("gallery")) {
            fs.mkdirSync("gallery")

        }
        cb(null, "gallery")
    }
})


const uploadlogo = multer({ storage: logoStorage }).single("logo")
const uploadGallery = multer({ storage: galleryStorage }).array("gallery", 5)
module.exports = { uploadlogo, uploadGallery }