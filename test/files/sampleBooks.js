const mongoose = require('mongoose');

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

const statusTypedata = [
  {
    _id: mongoose.Types.ObjectId(),
    "statustype": "available"
  },
  {
    _id: mongoose.Types.ObjectId(),
    "statustype": "unavailable"
  }
];

const genreTypedata = [
  {
    _id: mongoose.Types.ObjectId(),
    "genretype": "Crime"
  },
  {
    _id: mongoose.Types.ObjectId(),
    "genretype": "Childrens"
  },
  {
    _id: mongoose.Types.ObjectId(),
    "genretype": "Military History"
  },
  {
    _id: mongoose.Types.ObjectId(),
    "genretype": "Fiction"
  }
];
module.exports = {
    data: data, statusTypedata: statusTypedata, genreTypedata: genreTypedata
}
