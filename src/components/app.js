import React, { Component } from 'react';

import Header from 'components/Header';
import Footer from 'components/Footer';
import Main from 'components/Main';
// import Searcher from 'components/Searcher';
// import RepoList from 'components/RepoList';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}
