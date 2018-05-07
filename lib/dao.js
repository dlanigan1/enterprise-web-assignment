var Schemas = require('./schema');
var dao = {};
var data = require('../data/seed');

var books = data.books;
var statusTypes = data.statusTypes;
var genreTypes = data.genreTypes;

dao.loadBooks = function() {
  Schemas.bookModel.find({}).remove(() => {
    Schemas.bookModel.collection.insert(books, (err, docs)=>{
      if (err) {
        console.log(`failed to Load Book Data: ${err}`);
      } else {
        console.info(`${books.length} books were successfully stored.`);
      }
    });
  });
};

dao.loadStatusTypes = function() {
  Schemas.statusTypeModel.find({}).remove(() => {
    Schemas.statusTypeModel.collection.insert(statusTypes, (err, docs)=>{
      if (err) {
        console.log(`failed to Load Satus Type Data: ${err}`);
      } else {
        console.info(`${statusTypes.length} status types were successfully stored.`);
      }
    });
  });
};

dao.loadGenreTypes = function() {
  Schemas.genreTypeModel.find({}).remove(() => {
    Schemas.genreTypeModel.collection.insert(genreTypes, (err, docs)=>{
      if (err) {
        console.log(`failed to Load genre Type Data: ${err}`);
      } else {
        console.info(`${genreTypes.length} genre Types were successfully stored.`);
      }
    });
  });
};

/**
 * Get a list of the library books
 *
 * returns Book
 **/
dao.getAllBooks = function() {
  return Schemas.bookModel.find({}).lean();
}

/**
 * Get a list of the genre Types
 *
 * returns Genre Type
 **/
dao.getAllGenreTypes = function() {
  return Schemas.genreTypeModel.find({}).lean();
}
/**
 * Get a list of the status types
 *
 * returns Status Type
 **/
dao.getAllStatusTypes = function() {
  return Schemas.statusTypeModel.find({}).lean();
}

/**
 * Get a book for a given id
 *
 * id String
 * returns Book
 **/
dao.findBook = function(id) {
  // finds a pv installation by a passed in id
  let query = {};

  query._id = id;

  return Schemas.bookModel.findOne(query).lean();

}

/**
 * Create a new book
 *
 * book Book_1 The details of the book to create
 * returns Book
 **/
dao.createBook = function(book) {

  return new Schemas.bookModel({
          title: book.title,
          summary: book.summary,
          genre: book.genre,
          status: book.status,
          author: book.author
      })
      .save()
      .then(function (data) {
          console.info(`${book.title} was successfully stored.`);
          return Promise.resolve(data);
      });

}

/**
 * delete an instance of a book
 *
 * id String
 * returns Book
 **/
dao.deleteBook = function(id) {
  // finds a pv installation by a passed in id
  let query = {};

  query._id = id;

  return Schemas.bookModel.deleteOne(query)
  .then(function (data) {
      console.info(`${book.title} was successfully deleted.`);
      return Promise.resolve(data);
  });

}

/**
 * Update/change a book
 *
 * id String
 * body Body the various parameters (optional)
 * no response value expected for this operation
 **/
dao.updateBook = function(id,body) {
  var now = new Date();

  return Schemas.bookModel.findOneAndUpdate({
      _id: id
  }, {
      $set: {
          title: body.title,
          author: body.author,
          summary: body.summary,
          genre: body.genre,
          status: body.status

      }
  }, {
      upsert: true,
      new: true
  });
}


module.exports = dao;
