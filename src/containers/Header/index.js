import React, { Component } from 'react';
import BookListAppTitle from '../../components/BookListAppTitle.js'
import './styles.css';

class Header extends Component {
  constructor(){
    super()
    this.title = 'Book List App'
    this.subtext = 'subtext'
  }

  doClick = () => {
    console.log(this.title)
  }

  render() {
    return (
      <div className="Header">
        <BookListAppTitle
          title={this.title}
          subtext={this.subtext}
          doClick={this.doClick}
        />
      </div>
    );
  }
}

export default Header
