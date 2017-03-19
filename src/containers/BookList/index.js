import React, { Component } from 'react';
import BookList from '../../components/BookList.js'
import './styles.css';

class List extends Component {
  constructor(){
    super()
    this.title = 'Ready Player One'
    this.author = 'Ernest Cline'
  }
  // 
  // componentWillMount(){
  //   .getBooksFromFakeXHR()
  //     .then( books => {
  //       this.
  //     })
  // }

  render() {
    return (
    <div className="List">
      <BookList
        title={this.title}
        author={this.author}
      />
    </div>
    )
  }
}

export default List
