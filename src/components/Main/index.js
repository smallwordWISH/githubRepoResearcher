import React, { Component } from 'react';

import Searcher from 'components/Main/Searcher';
import RepoList from 'components/Main/RepoList';

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      lang: 'All',
      sort: 'stars',
      searchReset: true,
    };
  }

  inputOnChangeHandler = searchText => this.setState({ searchText });
  langOnClickHandler = lang => this.setState({ lang });
  sortOnClickHandler = sort => this.setState({ sort })


  render() {
    return (
      <main>
        <Searcher
          {...this.state}
          inputOnChange={this.inputOnChangeHandler}
          langOnClick={this.langOnClickHandler}
          sortOnClick={this.sortOnClickHandler}
        />
        <RepoList {...this.state} />
      </main>
    );
  }
}

index.propTypes = {

};

export default index;