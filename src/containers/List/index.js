import React, { Component } from 'react';
import BookList from '../../components/BookList.js'
import './styles.css';

class List extends Component {
  constructor(){
    super()
    this.title = 'Ready Player One'
    this.author = 'Ernest Cline'
  }

  render() {
    return (
    <div className="BookList">
      <BookList
        title={this.title}
        author={this.author}
      />
    </div>
    )
  }
}

export default List
