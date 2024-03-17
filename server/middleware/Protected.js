
const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const Employer = require("../model/Employer");
const User = require("../model/User");

exports.employerProtected = asyncHandler(async (req, res, next) => {
    const token = req.cookies.auth
    if (!token) {
        return res.status(401).json({ message: "No cookies found" });
    }

    jwt.verify(token, process.env.JWT_KEY, async (err, decode) => {
        if (err) {
            return res.status(401).json({ message: err.message || "JWT Error" });
        }
        const result = await User.findById(decode.userId)

        if (!result) {
            return res.status(401).json({ message: "Employer Not Found" })
        }
        if (result.role !== "emp") {
            return res.status(401).json({ message: "Employer Only Route" })

        }
        req.body.userId = decode.userId;
        next();
    });
});

exports.userProtected = asyncHandler(async (req, res, next) => {
    const token = req.cookies.auth
    if (!token) {
        return res.status(401).json({ message: "No cookies found" });
    }

    jwt.verify(token, process.env.JWT_KEY, async (err, decode) => {
        if (err) {
            return res.status(401).json({ message: err.message || "JWT Error" });
        }
        const result = await User.findById(decode.userId)

        if (!result) {
            return res.status(401).json({ message: "User Not Found" })
        }
        if (result.role !== "user") {
            return res.status(401).json({ message: "User Only Route" })

        }
        req.body.userId = decode.userId;
        next()
    });
});


