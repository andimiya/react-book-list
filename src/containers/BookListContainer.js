import React, {Component} from 'react';
import BookList from '../components/BookList.js';
import '../index.css';

class BookListContainer extends Component {
  constructor(props){
    super(props)

    this.state = {
      bookList : [
        {
          _id: 1,
          title: 'Ready Player One',
          author: 'Ernest Cline'
        },
        {
          _id: 2,
          title: 'Enders Game',
          author: 'Orson Scott Card'
        },
        {
          _id: 3,
          title: 'Bladerunner',
          author: 'Harrison Ford'
        }
      ]
    }
  }
  render() {
    return (
      <ul>
        {this.state.bookList.map((book) =>
          <BookList
            key={book._id}
            title={book.title}
            author={book.author}
          />
        )}
      </ul>
    )
  }
}

export default BookListContainer
