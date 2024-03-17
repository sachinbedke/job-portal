const { updateEmployer, getEmployerDetail, getAllJobs, addJob, updateJob, deleteJob, getApplicant, getApplicantResume, updateStatus } = require("../controller/empController");

const router = require("express").Router()

router
    .put("/update/:id", updateEmployer)
    .get("/employer-details/:id", getEmployerDetail)

    .get("/jobs", getAllJobs)
    .post("/add-job", addJob)
    .put("/update-job/:jobId", updateJob)
    .delete("/delete-job/:jobId", deleteJob)
    .get("/applicant/:jobId", getApplicant)
    .get("/applicant-resume/:userId", getApplicantResume)
    .put("/update-status/:id", updateStatus)


module.exports = router