const mongoose = require("mongoose");

const ResumeSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Types.ObjectId,
            ref: 'user',
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        mobile: {
            type: Number,
        },
        location: {
            type: String,
        },
        about: {
            type: String,
        },
        gender: {
            type: String,
            enum: ['male', 'female']
        },

        skills: {
            type: [String],
        },
        education: {
            type: [
                {
                    degree: {
                        type: String,
                    },
                    year: {
                        type: String,
                    },
                    percent: {
                        type: String,
                    },
                }
            ],
        },

        experience: {
            type: [
                {
                    role: {
                        type: String,
                    },
                    start: {
                        type: String,
                    },
                    end: {
                        type: String,
                    },
                    company: {
                        type: String,
                    }
                }

            ],
        },
        certifications: {
            type: [{
                cname: {
                    type: String,
                },
                date: {
                    type: String,
                },
                plateform: {
                    type: String,
                }
            }],
        },
        projects: {
            type: [
                {
                    pname: {
                        type: String,
                    },
                    url: {
                        type: String,
                    },
                    desc: {
                        type: String,
                    },

                }
            ],
        },
        social: {
            type: [
                {
                    sname: {
                        type: String,
                    },
                    url:
                    {
                        type: String,
                    },
                }
            ],
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("resume", ResumeSchema);