var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

    const BookSchema = new Schema({
      title: {type: String, minlength: 5, maxlength: 50, required :true },
      author: {type: String, minlength: 5, maxlength: 50, required :true },
      genre: {type: String, minlength: 5, maxlength: 25, required :true },
      summary: {type: String, minlength: 5, maxlength: 250, required :true },
      status: {type: String, minlength: 9, maxlength: 11, required :true }
    });

    const BorrowedBookSchema = new Schema({
      title: {type: String, minlength: 5, maxlength: 50, required :true },
      available: {type: Number, min: 0, required :true },
      borrowed: {type: Number, min: 0, required :true }
    });

    const StatusTypeSchema = new Schema({
      statustype: { type: String, enum: ['available', 'unavailable'], required :true }
    });

    const GenreTypeSchema = new Schema({
      genretype: { type: String, minlength: 5, maxlength: 25, required :true }
    });

module.exports=Schema={
  bookModel: mongoose.model('book', BookSchema),
  statusTypeModel: mongoose.model('statusType', StatusTypeSchema),
  genreTypeModel: mongoose.model('genreType', GenreTypeSchema),
  borrowedBookModel: mongoose.model('borrowedBooks', BorrowedBookSchema)

}
