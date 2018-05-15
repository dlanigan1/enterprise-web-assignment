var Promise = require('bluebird');
var chai = require('chai'),
  chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect,
  should = chai.should();
DAO = require('../../../lib/dao');

var request = require('supertest'),
  Schema = require('../../../lib/schema'),
  mongoose = require('mongoose'),
server = require('../../../app');
var sampleBooks = require('../../files/sampleBooks'); // a list of sample installations


describe('controllers', function () {
  before(function () {

  })

  after(function () {
  })

  describe('GET /api/books/{id}', function () {
    before(() => {
      return Schema.bookModel.insertMany(sampleBooks.data)
    });
    afterEach(() => {
      return Schema.bookModel.remove({}) // clear the database
    });


    it('should find a specific book', function (done) {
      request(server)
        .get('/api/books/' + sampleBooks.data[0]._id)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, res) {
          should.not.exist(err);
          res.body.should.have.a.property('title').which.is.a('string');
          res.body.title.should.equal('test book 1');
          done();
        });
    });
  });

  describe('GET /api/books', function () {
    before(() => {
      return Schema.bookModel.insertMany(sampleBooks.data)
    });
    afterEach(() => {
      return Schema.bookModel.remove({}) // clear the database
    });


    it('should find all books', function (done) {

      request(server)
        .get('/api/books/')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, res) {
          should.not.exist(err);
          res.body[1].should.have.a.property('title').which.is.a('string');
          res.body[1].title.should.equal('test book 2');
          done();
        });
    });
  });

  describe('GET /api/statustypes', function () {
    before(() => {
//      return Schema.statusTypeModel.insertMany(sampleBooks.statusTypedata)
    });
    afterEach(() => {
  //    return Schema.statusTypeModel.remove({}) // clear the database
    });


    it('should find all statusTypes', function (done) {

      request(server)
        .get('/api/statustypes/')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, res) {
          should.not.exist(err);
          res.body[1].should.have.a.property('statustype').which.is.a('string');
          res.body[1].statustype.should.equal('unavailable');

          done();
        });
    });
  });

  describe('GET /api/genreTyps', function () {
    before(() => {
      return Schema.genreTypeModel.insertMany(sampleBooks.genreTypedata)
    });
    afterEach(() => {
      return Schema.genreTypeModel.remove({}) // clear the database
    });


    it('should find all genreTypes', function (done) {

      request(server)
        .get('/api/genreTypes/')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, res) {
          should.not.exist(err);
          res.body[1].should.have.a.property('genretype').which.is.a('string');
          res.body[1].genretype.should.equal('Childrens');
          done();
        });
    });
  });

  describe('POST /api/books', function () {
    it('it should create a book', function (done) {
      request(server)
        .post('/api/books')
        .send({
          "title": "title test",
          "author": "author test",
          "summary": "summary test",
          "status": "available",
          "genre": "childrens"
        })
        .set('Accept', 'application/json')
        .expect(200)
        .end(function (err, res) {
          // store the newly created id for use in later tests
          should.not.exist(err);
          res.body.should.have.a.property('title').which.is.a('string');
          res.body.title.should.equal('title test');
          done();
        });
    });
  });
  describe('DELETE /api/books/{id}', function () {
    before(() => {
      return Schema.bookModel.insertMany(sampleBooks.data)
    });
    afterEach(() => {
      return Schema.bookModel.remove({}) // clear the database
    });


    it('should delete a specific book', function (done) {

      request(server)
        .delete('/api/books/' + sampleBooks.data[0]._id)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, res) {
          should.not.exist(err);
          done();
        });
    });
  });

});
