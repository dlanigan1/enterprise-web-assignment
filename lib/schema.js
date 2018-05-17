var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

    const BookSchema = new Schema({
      title: {type: String, minlength: 5, maxlength: 50 },
      author: {type: String, minlength: 5, maxlength: 50 },
      genre: {type: String, minlength: 5, maxlength: 25 },
      summary: {type: String, minlength: 5, maxlength: 250 },
      status: {type: String, minlength: 5, maxlength: 11 },
    });

    const StatusTypeSchema = new Schema({
      statustype: { type: String, enum: ['available', 'unavailable'] }
    });

    const GenreTypeSchema = new Schema({
      genretype: { type: String, minlength: 5, maxlength: 25 }
    });

module.exports=Schema={
  bookModel: mongoose.model('book', BookSchema),
  statusTypeModel: mongoose.model('statusType', StatusTypeSchema),
  genreTypeModel: mongoose.model('genreType', GenreTypeSchema)

}
