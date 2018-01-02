const db = require('./db');

const createBook = (title, author, genre) => {
  // add the create book function here.
};

const getAllBooks = () => {
  // add the function here.
};

const getBookByTitle = (search) => {
  // add here.
};

const getBookByAuthor = (search) => {
  // add here.
};

const getBookByGenre = (search) => {
  // add here
};

const getBookById = (id) => {
  // take in id, spit out book.
};

const editBookById = (id, title, author, genre) => {
  // take in id, spit out edited book.
};

const deleteBookById = (id) => {
  // take in id, delete book.
};


module.exports = { createBook, getAllBooks, getBookByTitle, getBookByAuthor, getBookByGenre, getBookById, editBookById, deleteBookById };
