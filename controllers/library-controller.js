'use strict';

var utils = require('../utils/writer.js');
var DAO = require('../lib/dao');

module.exports.createBook = function createBook (req, res, next) {
  var book = req.swagger.params['Book'].value;
  return DAO.createBook(book)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteBook = function deleteBook (req, res, next) {
  var id = req.swagger.params['id'].value;
  DAO.deleteBook(id)
    .then(function (response) {
      console.log('Installation ID=' + id + ' was deleted sucessfully');
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.findBook = function findBook (req, res, next) {
  var id = req.swagger.params['id'].value;
  DAO.findBook(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAllBooks = function getAllBooks (req, res, next) {

  DAO.getAllBooks()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAllGenreTypes = function getAllGenreTypes (req, res, next) {
  DAO.getAllGenreTypes()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAllStatusTypes = function getAllStatusTypes (req, res, next) {
  DAO.getAllStatusTypes()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateBook = function updateBook (req, res, next) {
  var id = req.swagger.params['id'].value;
  var body = req.swagger.params['body'].value;
  DAO.updateBook(id,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
