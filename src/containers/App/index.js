import React, { Component } from 'react';
import Header from '../../components/Header.js'
import BookListContainer from '../BookListContainer.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
      <Header />
      <BookListContainer />
      </div>
    );
  }
}

export default App;
