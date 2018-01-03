const expect = require('chai').expect;
const books = require('../src/data/db/queries');
const helpers = require('../src/data/db/helpers');

/* global define, it, describe, before, beforeEach */



describe('createBook', function () {
  before(function () {
    return helpers.clearAllBooks()
      .then(() => {
        helpers.seedDatabase("Dune", "Frank Herbert", "fiction");
      });
  });
  it('should be a function', function () {
    expect(books.createBook).to.be.a('function');
  });

  it('should add a book to the database', function () {
    return books.createBook("The Great Test", "Testy Test", "Fiction")
      .then((createdBook) => {
        expect(createdBook.title).to.eql('The Great Test');
      });
  });
});

describe('getAllBooks', function () {
  before(function () {
    return helpers.clearAllBooks()
      .then(() => {
        helpers.seedDatabase("Dune", "Frank Herbert", "fiction");
      });
  });
  it('should be a function', function () {
    expect(books.getAllBooks).to.be.a('function');
  });

  it('should display all books in the database', function () {
    return books.getAllBooks()
      .then((allBooks) => {
        expect(allBooks.length).to.equal(1);
      });
  });
});

describe('getBookByTitle', function () {
  before(function () {
    return helpers.clearAllBooks()
      .then(() => {
        helpers.seedDatabase("Dune", "Frank Herbert", "fiction");
      });
  });
  it('should be a function', function () {
    expect(books.getBookByTitle).to.be.a('function');
  });

  it('should display all books that match the searched title', function () {
    return books.getBookByTitle('Du')
      .then((searchResults) => {
        expect(searchResults.length).to.equal(1);
      });
  });
});

describe('getBookByAuthor', function () {
  before(function () {
    return helpers.clearAllBooks()
      .then(() => {
        helpers.seedDatabase("Dune", "Frank Herbert", "fiction");
      });
  });
  it('should be a function', function () {
    expect(books.getBookByAuthor).to.be.a('function');
  });

  it('should display all books that match the searched author', function () {
    return books.getBookByAuthor('Fra')
      .then((searchResults) => {
        console.log("author search results", searchResults);
        expect(searchResults[0].title).to.eql("Dune");
      });
  });
});

describe('getBookByGenre', function () {
  before(function () {
    return helpers.clearAllBooks()
      .then(() => {
        helpers.seedDatabase("Dune", "Frank Herbert", "fiction");
      });
  });
  it('should be a function', function () {
    expect(books.getBookByGenre).to.be.a('function');
  });

  it('should display all books that match the searched genre', function () {
    return books.getBookByGenre('fic')
      .then((searchResults) => {
        expect(searchResults[0].title).to.eql("Dune");
      });
  });
});

describe('getBookById', function () {
  before(function () {
    return helpers.clearAllBooks()
      .then(() => {
        helpers.seedDatabase("Dune", "Frank Herbert", "fiction");
      });
  });
  it('should be a function', function () {
    expect(books.getBookById).to.be.a('function');
  });

  it('should display the book that matches the given id', function () {
    return books.getBookById(1)
      .then((searchResults) => {
        expect(searchResults.title).to.eql("Dune");
      });
  });
});

describe('editBookById', function () {
  before(function () {
    return helpers.clearAllBooks()
      .then(() => {
        helpers.seedDatabase("Dune", "Frank Herbert", "fiction");
      });
  });
  it('should be a function', function () {
    expect(books.editBookById).to.be.a('function');
  });

  it('should return one edited book', function () {
    return books.editBookById(1, "The Greater Test", "Testy Test", "Fiction")
      .then((editedBook) => {
        expect(editedBook.title).to.eql("The Greater Test");
      });
  });
});

describe('deleteBookById', function () {
  before(function () {
    return helpers.clearAllBooks()
      .then(() => {
        helpers.seedDatabase("Dune", "Frank Herbert", "fiction");
      });
  });
  it('should be a function', function () {
    expect(books.deleteBookById).to.be.a('function');
  });

  it('should delete a book by given id', function () {
    return books.deleteBookById(1)
      .then(() => {
        return books.getAllBooks()
          .then((allBooks) => {
            expect(allBooks.length).to.equal(0);
          });
      });
  });
});
