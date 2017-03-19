import React from 'react'

const BookList = (props) => (
  <div className="Book-list">
    <h2>{ props.title }</h2>
    <p>{ props.author }</p>
  </div>
)

export default BookList
