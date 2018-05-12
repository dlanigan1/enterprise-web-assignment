var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

    const BookSchema = new Schema({
      title: String,
      author: String,
      genre: String,
      summary: String,
      status: String,
    });

    const StatusTypeSchema = new Schema({
      value: String
    });

    const GenreTypeSchema = new Schema({
      value: String
    });

module.exports=Schema={
  bookModel: mongoose.model('book', BookSchema),
  statusTypeModel: mongoose.model('statusType', StatusTypeSchema),
  genreTypeModel: mongoose.model('genreType', GenreTypeSchema)

}