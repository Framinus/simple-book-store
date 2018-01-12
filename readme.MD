# Simple Bookstore

Simple Bookstore is a RESTful API built in Express.js and using PostgreSQL to store data. It follows CRUD principles and consists of the following routes:

- __/books/create__ - create a new book (create)
- __/books__ - list all books (read)
- __/books/:id__ - retrieve a particular book (read)
- __/books/edit/:id__ - update a particular book (update)
- __/books/delete/:id__ - delete a particular book (delete)

## Getting Started

### Prerequisites

You must have Node, Node Package Manager and PostgreSQL installed on your local machine.

### Installing

- Fork and clone the repository.
- ```npm install``` to get the required dependencies.
- ```npm run init:db``` to create, load, and seed the database.
- You will need to create your own .env file within the project with the following line:

```
DATABASE_URL="postgres://localhost:5432/bookstore"
```

- ```npm start``` to start the server, or ```npm run start:dev``` to run it in development mode with nodemon.

## Running the tests

To run unit tests for the API queries, just run ```npm test``` after installing the dependencies. Tests are implemented in Mocha/Chai.

## Deployment

This project is set up for live deployment.

## Authors

* **James McCormack**
[Framinus](https://github.com/Framinus)
* **Mateo Balcorta**
[Mbalcorta](https://github.com/Mbalcorta)

## License

This project is licensed under the MIT License.
