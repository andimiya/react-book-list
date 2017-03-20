import React, { Component } from 'react';
import '../index.css';

class Header extends Component {
  constructor(){
    super()
    this.state = {
      title: 'Book List app',
      subtext: 'subtext',
      clicked: false,
    };
    this.doClick = this.doClick.bind(this);
  }

  doClick = () => {
    this.setState({ clicked: true });
    console.log(this.title)
  }

  render() {
    return (
      <div className="App-header">
        <h2>{ this.state.title }</h2>
        <p>{ this.state.subtext }</p>
        <button onClick={ this.state.doClick }>Do Click</button>
      </div>
    );
  }
}

export default Header
