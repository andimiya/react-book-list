import React from 'react';
import ReactDOM from 'react-dom';
import Header from './containers/Header';
import List from './containers/BookList';

import './index.css';

ReactDOM.render(
  <Header />,
  document.getElementById('root')
);

ReactDOM.render(
  <List />,
  document.getElementById('body')
);
