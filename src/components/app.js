import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Header from 'components/Header';
import Footer from 'components/Footer';
import Searcher from 'components/Searcher';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Searcher />
        <Footer />
      </div>
    );
  }
}
