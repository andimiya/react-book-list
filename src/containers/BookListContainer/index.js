import React, { Component } from 'react';
import BookList from '../../components/BookList.js'
import './styles.css';

class List extends Component {
  constructor(props){
    super(props)

    this.state = {
      BookList : [],
    }

    this.allBooks = [
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

  render() {
    return (
    // <div className="List">
    //   <BookList
    //     title={this.title}
    //     author={this.author}
    //   />
    // </div>
    <ul>
      this.state.BookList.map( ( { title, author }) =>
        <BookList
          title={BookList.title}
          author={BookList.author}
        />
        )
    </ul>
    )
  }
}

export default BookListContainer
