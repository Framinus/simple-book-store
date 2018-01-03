const db = require('./db');
const books = require('./queries');

const clearAllBooks = () => {
  return db.oneOrNone(`
    TRUNCATE books RESTART IDENTITY;`);
};

const seedDatabase = (title, author, genre) => {
  return db.one(`
    INSERT INTO books (title, author, genre)
    VALUES ($1, $2, $3)
    RETURNING *`, [title, author, genre]);
};

const resetDatabase = () => {
  return clearAllBooks()
    .then((cleared) => {
      return seedDatabase("Dune", "Frank Herbert", "fiction");
    })
    .catch(console.error);
};


module.exports = { clearAllBooks, seedDatabase };
