const { rateLimit } = require("express-rate-limit")

exports.publicLimter = rateLimit({
    windowMs: 1000 * 60,
    limit: 50
})


exports.loginLimiter = rateLimit({
    windowMs: 1000 * 60 * 15,
    limit: 50
})