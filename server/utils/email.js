const nodemailer = require("nodemailer")

const sendEmail = ({
    to = process.env.FROM_EMAIL,
    subject = "Job Portal ",
    message = "Simaple email",
    attachment,
}) => new Promise((resolve, reject) => {
    try {
        const mailer = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.FROM_EMAIL,
                pass: process.env.EMAIL_PASS

            }
        })
        mailer.sendMail({
            to,
            from: process.env.FROM_EMAIL,
            subject,
            text: message,
            attachments: attachment && [
                {
                    filename: attachment,
                    path: attachment,
                    contentType: "application/pdf"
                }
            ]
        }, err => {
            if (err) {
                reject(err.message || "Something sent wrong with email")

            }
            console.log("EMAIL SEND")
            resolve("email send success")
        })
    } catch (error) {
        reject(error.message || "Something sent wrong with email")
    }
})

module.exports = sendEmail