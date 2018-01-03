const router = require('express').Router()
const { createBook, getAllBooks, getBookBytitle, getBookByAuthor, getBookByGenre, getBookById, editBookById, deleteBookById} = require('../data/db/queries')

router.get('/', (req, res)=>{
  return getAllBooks()
    .then(books => {
      res.json(books)
    })
})

module.exports = router