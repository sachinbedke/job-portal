const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const cookieParser = require("cookie-parser")
const { rateLimit } = require("express-rate-limit")
const cron = require("node-cron")
const { employerProtected, userProtected } = require("./middleware/Protected")
require("dotenv").config({ path: "./.env" })



const publicLimiter = rateLimit({
    windowMs: 1000 * 60,
    limit: 1
})

// cron.schedule("* * * * *", () => {
//     console.log(new Date());
// })
mongoose.connect(process.env.MONGO_URL)

const app = express()

// app.use(publicLimiter)
app.use(express.json())
app.use(cookieParser())
app.use(express.static("logo"))
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))

// app.use("/api/user", require("./routes/userRoute"))
app.use("/api/auth", require("./routes/authRoute"))
app.use("/api/employer", employerProtected, require("./routes/employerRoute"))
app.use("/api/public", require("./routes/publicRoute"))
app.use("/api/user", userProtected, require("./routes/userRoute"))

app.use("*", (req, res) => {
    res.status(404).json({ message: "No resource found" })
})

app.use((err, req, res, next) => {
    console.log(err);
    return res.status(500).json({ message: err.message || "Something went wrong" })
})

mongoose.connection.once("open", () => {
    console.log("Mongoose connected")
    app.listen(process.env.PORT, console.log(`Server running ${process.env.PORT}`))
})