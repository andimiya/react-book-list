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
    );
  }
}

export default App;
