const mongoose = require('mongoose');

const data = [{
        _id: mongoose.Types.ObjectId(),
        title: "test book 1",
        author: "test author 1",
        genre: "Childrens",
        summary: "test summary 1",
        status: "unavailable"

    },
    {
        _id: mongoose.Types.ObjectId(),
        title: "test book 2",
        author: "test author 2",
        genre: "Military History",
        summary: "test summary 2",
        status: "available"
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
