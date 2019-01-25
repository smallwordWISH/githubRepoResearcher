import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Header from 'components/Header';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        React redux boilerplate
      </div>
    );
  }
}
