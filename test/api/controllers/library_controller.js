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

  describe('GET /api/titles', function () {
    before(() => {
      return Schema.bookModel.insertMany(sampleBooks.data)
    });
    afterEach(() => {
      return Schema.bookModel.remove({}) // clear the database
    });


    it('should find all book titles', function (done) {

      request(server)
        .get('/api/titles/')
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
          should.not.exist(err);
          res.body.should.have.a.property('title').which.is.a('string');
          res.body.title.should.equal('title test');
          done();
        });
    });
    it('it should fail to create a book with data thats too long', function (done) {
      request(server)
        .post('/api/books')
        .send({
          "title": "this test title is far too long and will break the validation",
          "author": "author test",
          "summary": "summary test",
          "status": "available",
          "genre": "childrens"
        })
        .set('Accept', 'application/json')
        .expect(400)
        .end(function (err, res) {
          should.not.exist(err);
          done();
        });
    });

    it('it should fail to create a book with invalid status data', function (done) {
      request(server)
        .post('/api/books')
        .send({
          "title": "test title",
          "author": "author test",
          "summary": "summary test",
          "status": "aalable",
          "genre": "childrens"
        })
        .set('Accept', 'application/json')
        .expect(400)
        .end(function (err, res) {
          should.not.exist(err);
          done();
        });
    });
    it('it should fail to create a book with invalid genre data', function (done) {
      request(server)
        .post('/api/books')
        .send({
          "title": "test title",
          "author": "author test",
          "summary": "summary test",
          "status": "unavailable",
          "genre": ""
        })
        .set('Accept', 'application/json')
        .expect(400)
        .end(function (err, res) {
          should.not.exist(err);
          done();
        });
    });

  });

  describe('PUT /api/books/{id}', function () {
    it('it should update a book', function (done) {
      request(server)
        .put('/api/books/' + sampleBooks.data[0]._id)
        .send({
          "title": "new title",
          "author": "new author",
          "summary": " new summary",
          "status": "available",
          "genre": "childrens"
        })
        .set('Accept', 'application/json')
        .expect(200)
        .end(function (err, res) {
          should.not.exist(err);
          res.body.should.have.a.property('title').which.is.a('string');
          res.body.title.should.equal('new title');
          done();
        });
    });
    it('it should fail to update a book with data thats too long', function (done) {
      request(server)
        .put('/api/books/' + sampleBooks.data[0]._id)
        .send({
          "title": "this test title is far too long and will break the validation",
          "author": "author test",
          "summary": "summary test",
          "status": "available",
          "genre": "childrens"
        })
        .set('Accept', 'application/json')
        .expect(400)
        .end(function (err, res) {
          should.not.exist(err);
          done();
        });
    });

    it('it should fail to update a book with invalid status data', function (done) {
      request(server)
        .put('/api/books/' + sampleBooks.data[0]._id)
        .send({
          "title": "test title",
          "author": "author test",
          "summary": "summary test",
          "status": "aalable",
          "genre": "childrens"
        })
        .set('Accept', 'application/json')
        .expect(400)
        .end(function (err, res) {
          should.not.exist(err);
          done();
        });
    });
    it('it should fail to update a book with invalid genre data', function (done) {
      request(server)
        .put('/api/books/' + sampleBooks.data[0]._id)
        .send({
          "title": "test title",
          "author": "author test",
          "summary": "summary test",
          "status": "unavailable",
          "genre": ""
        })
        .set('Accept', 'application/json')
        .expect(400)
        .end(function (err, res) {
          should.not.exist(err);
          done();
        });
    });

  });

  describe('DELETE /api/books/{id}', function () {

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
