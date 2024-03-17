const { continueWithGoogle, logout } = require("../controller/authController")
const { loginLimiter } = require("../middleware/limiter")

const router = require("express").Router()

router
    .post("/continue-with-google", loginLimiter, continueWithGoogle)
    .post("/logout", logout)


module.exports = router