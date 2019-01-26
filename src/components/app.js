import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Header from 'components/Header';
import Footer from 'components/Footer';
import Searcher from 'components/Searcher';
import RepoList from 'components/RepoList';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Searcher />
        <RepoList />
        <Footer />
      </div>
    );
  }
}
