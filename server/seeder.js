const Jobs = require('./model/Jobs')

const arr = [
    {
        company: "65e1e2e4b5d12b007d7b2222",
        title: "developer",
        role: "fullstack",
        desc: "the is dsc",
        closingDate: "15-03-2024",
        hiringLocation: "pune",
        salary: "25000",
        level: "jr",
        qualification: "bcs",
        experience: "44 year",
        quantity: "3",
        type: "offline  ",
    }
]
const add = async () => {
    await Jobs.create()
}