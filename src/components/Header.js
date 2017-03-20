import React, { Component } from 'react';
import './index.css';

const BookListAppTitle = (props) => (
  <div className="App-header">
    <h2>{ props.title }</h2>
    <p>{ props.subtext }</p>
    <button onClick={ props.doClick }>Do Click</button>
  </div>
)

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
      <div className="Header">
        <BookListAppTitle
          title={this.state.title}
          subtext={this.state.subtext}
          doClick={this.doClick}
        />
      </div>
    );
  }
}

export default Header
