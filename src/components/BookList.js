import React from 'react'
import '../index.css';

const BookList = (props) => (
  <div className="Book-list">
    <h2>{ props.title }</h2>
    <p>{ props.author }</p>
  </div>
)

export default BookList
