const { addApplications, getUserAllApplications, getAllApplications } = require("../controller/applicationController")
const { getAllResume, createResume, updateResume, deleteResume, downloadResume, getUserResume } = require("../controller/resumeController")

const router = require("express").Router()



router
    .get("/get", getAllResume)
    .post("/create", createResume)
    .put("/update/:Id", updateResume)
    .delete("/delete/:Id", deleteResume)
    .get("/genrate-resume", downloadResume)
    .get("/resume", getUserResume)
    .post("/apply-job", addApplications)
    .get("/is-applied", getUserAllApplications)
    .get("/history", getAllApplications)
module.exports = router