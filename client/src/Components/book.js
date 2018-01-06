import React, { Component } from 'react';
import axios from 'axios';
import '../App.css';

class Book extends Component {
  constructor(props) {
    super(props);

    this.editBook = this.editBook.bind(this)
    this.saveBook = this.saveBook.bind(this)

    this.state = {
      editMode: false,
      title: this.props.title,
      author: this.props.author,
      genre: this.props.genre
    };
  }

  editBook = () => {
    this.setState({
      editMode: true
    })
  }

  saveBook = (event) => {
    event.preventDefault()
    const { title, author, genre } = this.state
    const id = this.props.id
    axios.put(`http://localhost:3000/books/edit/${id}`, {title:title, author:author, genre:genre})
      .then((editedBook) => {
        console.log(editedBook);
        this.setState({
        editMode: false,
      })
    })
  }

  handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    this.setState({
      [name]: event.target.value
    })
  }

  render() {

    let book = null;

    if (this.state.editMode) {
      book = (
        <li key={this.props.id} className="book-row">
          <form>
            <input type="text" name="title" onChange={this.handleChange} defaultValue={this.state.title} />
            <input type="text" name="author" onChange={this.handleChange} defaultValue={this.state.author} />
            <input type="text" name="genre" onChange={this.handleChange} defaultValue={this.state.genre} />
            <button onClick={this.saveBook} type="submit">Save</button>
          </form>
        </li>
      );
    } else {
      book = (
        <li className="book-row" key={this.props.id}>
          <span>title: {this.state.title}</span>
          <span>author: {this.state.author}</span>
          <span>genre: {this.state.genre}</span>
          <span className="book-btns">
            <button id="edit-btn" onClick={this.editBook}>Edit</button>
            <button id="delete-btn" onClick={this.props.click}>Delete</button>
          </span>
        </li>
      )
    }

    return (
      <div>
        {book}
      </div>
    );
  }
}

export default Book;
