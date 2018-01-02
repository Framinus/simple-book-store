const expect = require('chai').expect;
const books = require('../src/data/db/queries');

/* global define, it, describe */

describe('createBook', function () {
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
  it('should be a function', function () {
    expect(books.getBookByTitle).to.be.a('function');
  });

  it('should display all books in the database', function () {
    return books.getBookByTitle('test')
      .then((searchResults) => {
        expect(searchResults.length).to.equal(1);
      });
  });
});

describe('getBookByAuthor', function () {
  it('should be a function', function () {
    expect(books.getBookByAuthor).to.be.a('function');
  });

  it('should display all books in the database', function () {
    return books.getBookByAuthor('test')
      .then((searchResults) => {
        expect(searchResults.length).to.equal(1);
      });
  });
});

describe('getBookByGenre', function () {
  it('should be a function', function () {
    expect(books.getBookByGenre).to.be.a('function');
  });

  it('should display all books in the database', function () {
    return books.getBookByGenre('fiction')
      .then((searchResults) => {
        expect(searchResults.length).to.equal(1);
      });
  });
});

describe('getBookById', function () {
  it('should be a function', function () {
    expect(books.getBookById).to.be.a('function');
  });

  it('should display all books in the database', function () {
    return books.getBookById(1)
      .then((searchResults) => {
        expect(searchResults.length).to.equal(1);
      });
  });
});

describe('editBookById', function () {
  it('should be a function', function () {
    expect(books.editBookById).to.be.a('function');
  });

  it('should display all books in the database', function () {
    return books.editBookById(1, "The Greater Test", "Testy Test", "Fiction")
      .then((editedBook) => {
        expect(editedBook.title).to.eql("The Greater Test");
      });
  });
});

describe('deleteBookById', function () {
  it('should be a function', function () {
    expect(books.deleteBookById).to.be.a('function');
  });

  it('should display all books in the database', function () {
    books.deleteBookById(1);
    return books.getAllBooks()
      .then((allBooks) => {
        expect(allBooks.length).to.equal(0);
      });
  });
});
