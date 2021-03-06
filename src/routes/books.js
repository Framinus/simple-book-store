const router = require('express').Router()
const { createBook, getAllBooks, getBookByTitle, getBookByAuthor, getBookByGenre, getBookById, editBookById, deleteBookById} = require('../data/db/queries')

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

router.post('/search/title', (req, res)=>{
  const search = req.body.search
  return getBookByTitle(search)
    .then(books => {
      res.json(books)
    })
})

router.post('/search/author', (req, res)=>{
  const search = req.body.search
  return getBookByAuthor(search)
    .then(books => {
      res.json(books)
    })
})

router.post('/search/genre', (req, res)=>{
  const search = req.body.search
  return getBookByGenre(search)
    .then(books => {
      res.json(books)
    })
})

router.get('/:id' , (req, res) => {
  const { id } = req.params
  return getBookById(id)
    .then(book => {
      res.json(book)
    })
    .catch(console.error)
})

router.put('/edit/:id', (req, res) => {
  const { id } = req.params
  const { title, author, genre } = req.body
  return editBookById(id, title, author, genre)
    .then(book => {
      res.json(book)
    })
    .catch(console.error)
  
})

router.delete('/delete/:id', (req, res) => {
  const { id } = req.params
  return deleteBookById(id)
    .then(book => {
      res.json(book)
    })
    .catch(console.error)
})

module.exports = router