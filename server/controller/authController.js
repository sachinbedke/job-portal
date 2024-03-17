const asyncHandler = require("express-async-handler");
const { OAuth2Client } = require("google-auth-library");
const jwt = require("jsonwebtoken");
const User = require("../model/User");
const Resume = require("../model/Resume");

exports.continueWithGoogle = asyncHandler(async (req, res) => {
    const { credential } = req.body;

    const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

    const verify = await client.verifyIdToken({ idToken: credential });
    if (!verify) {
        res.status(400).json({ message: "unable to verify" });
    }
    const { email, name, picture } = verify.payload;
    // console.log(verify.payload);
    const result = await User.findOne({ email });

    const role = (req.body.type === "user" || req.body.type === "emp") ? req.body.type : "user"
    if (!result) {
        const userData = await User.create({

            name,
            email,
            photo: picture,
            role
        });
        if (role === "user") {
            await Resume.create({
                name,
                email,
                userId: userData._id,
                education: [{ degree: "", year: "--", percent: "" }],
                experience: [{ role: "", start: "--", end: "--", company: "" }],
                certifications: [{ cname: "", date: "--", plateform: "" }],
                projects: [{ pname: "", url: "--", desc: "" }],
                social: [{ sname: "", url: "" }]
            })
        }
        const token = jwt.sign({ userId: userData._id }, process.env.JWT_KEY, {
            expiresIn: "7d",
        });

        res.cookie("auth", token, { maxAge: 1000 * 60 * 60 * 24, httpOnly: true });
        return res.json({
            message: "register success",
            result: { _id: userData._id, name, email, photo: picture, role },
        });
    } else {
        const token = jwt.sign({ userId: result._id }, process.env.JWT_KEY, {
            expiresIn: "1d",
        });

        res.cookie("auth", token, { maxAge: 1000 * 60 * 60 * 24, httpOnly: true });
        return res.json({
            message: "Login  Success ", result: {
                _id: result._id,
                name: result.name,
                email: result.email,
                photo: result.photo,
                isActive: result.isActive,
                role: result.role,
            }
        });
    }
})
exports.logout = asyncHandler(async (req, res) => {
    res.clearCookie("auth")
    res.json({ message: "Logout Success" })
})
