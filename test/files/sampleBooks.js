const mongoose = require('mongoose');

const sampleBookID = new mongoose.Types.ObjectId()
const sampleBookID2 = new mongoose.Types.ObjectId()

const data = [{
        _id: mongoose.Types.ObjectId(),
        title: "test book 1",
        author: "test author 1",
        genre: "test genre 1",
        summary: "test summary 1",
        status: "test status 1"

    },
    {
        _id: mongoose.Types.ObjectId(),
        title: "test book 2",
        author: "test author 2",
        genre: "test genre 2",
        summary: "test summary 2",
        status: "test status 2"

    }

]

module.exports = {
    data: data,
    sampleBookID: sampleBookID,
    sampleBookID2: sampleBookID2
}
