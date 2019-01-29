import React, { Component } from 'react';

import Header from 'components/Header';
import Footer from 'components/Footer';
import Main from 'components/Main';
import Spinner from 'components/Spinner';
import store from 'store';

export default class App extends Component {

  render() {
    return (
      <div>
        <Header />
        <Main />
        <Spinner />
        <Footer />
      </div>
    );
  }
}
