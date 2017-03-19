import React, { Component } from 'react';
import BookListAppTitle from '../../components/BookListAppTitle.js'
import BookData from '../../data/booklist.js'
import './styles.css';

class App extends Component {
  constructor(){
    super()
    this.title = 'Book List App'
    this.subtext = 'subtext'

  }

  doClick = () => {
    console.log(this.title)
    console.log(BookData)
  }

  render() {
    return (
      <div className="App">
        <BookListAppTitle
          title={this.title}
          subtext={this.subtext}
          doClick={this.doClick}
        />
      </div>
    );
  }
}
//
// class Booklist extends Component {
//   constructor()
//     super()
//     this.state = {
//       books: []
//     }
// }

export default App;
