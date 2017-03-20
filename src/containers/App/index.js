import React, { Component } from 'react';
import Header from '../../components/Header.js'
import BookList from '../../components/BookList.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
      <Header />
      <BookList />
      </div>

      // <div className="App">
      //   <div className="App-header">
      //     <h2>Welcome to React</h2>
      //   </div>
      //   <p className="App-intro">
      //     To get started, edit <code>src/App.js</code> and save to reload.
      //   </p>
      // </div>
    );
  }
}

export default App;
