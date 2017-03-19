import React from 'react'

const BookListAppTitle = (props) => (
  <div className="App-header">
    <h2>{ props.title }</h2>
    <p>{ props.subtext }</p>
    <button onClick={ props.doClick }>Do Click</button>
  </div>
)

export default BookListAppTitle
