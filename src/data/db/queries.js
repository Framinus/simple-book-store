const db = require('./db');

const createBook = (title, author, genre) => {
  return db.one(`
    INSERT INTO books (title, author, genre)
    VALUES($1, $2, $3)
    RETURNING *`, [title, author, genre])
    .then(book => book)
    .catch(console.error);
};

const getAllBooks = () => {
  return db.any(`
    SELECT * FROM books`, [])
    .then(books => books)
    .catch(console.error);
};

const getBookByTitle = (search) => {
  const searchTerm = search + '%';
  return db.any(`
    SELECT * FROM books
    WHERE title LIKE $1`, searchTerm)
    .then(books => books)
    .catch(console.error);
};

const getBookByAuthor = (search) => {
  const searchTerm = search + '%';
  return db.any(`
    SELECT * FROM books
    WHERE author LIKE $1`, searchTerm)
    .then(books => books)
    .catch(console.error);
};

const getBookByGenre = (search) => {
  const searchTerm = search + '%';
  return db.any(`
    SELECT * FROM books
    WHERE genre LIKE $1`, searchTerm)
    .then(books => books)
    .catch(console.error);
};

const getBookById = (id) => {
  return db.one(`
    SELECT * FROM books
    WHERE id=$1`, id);
};

const editBookById = (id, title, author, genre) => {
  return db.one(`
    UPDATE books
    SET title=$2, author=$3, genre=$4
    WHERE id=$1
    RETURNING *`, [id, title, author, genre]);
};

const deleteBookById = (id) => {
  return db.oneOrNone(`
    DELETE FROM books
    WHERE id=$1
    `, id);
};


module.exports = { createBook, getAllBooks, getBookByTitle, getBookByAuthor, getBookByGenre, getBookById, editBookById, deleteBookById };
