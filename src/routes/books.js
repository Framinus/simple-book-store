const router = require('express').Router()
const { createBook, getAllBooks, getBookBytitle, getBookByAuthor, getBookByGenre, getBookById, editBookById, deleteBookById} = require('../data/db/queries')

router.get('/', (req, res)=>{
  return getAllBooks()
    .then(books => {
      res.json(books)
    })
})

router.post('/create', (req, res)=>{
  const { title, author, genre } = req.body
  return createBook(title, author, genre)
    .then(book => {
      res.json(book)
    })
})


module.exports = router