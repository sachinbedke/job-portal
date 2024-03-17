const { getAllPublicJobs, getPublicJobDetail } = require("../controller/publicController")

const router = require("express").Router()

router
    .get("/all-jobs", getAllPublicJobs)
    .get("/job-detail/:jobId", getPublicJobDetail)


module.exports = router
