import React, { Component } from 'react';
import { connect } from 'react-redux';
import Searcher from 'components/Main/Searcher';
import RepoList from 'components/Main/RepoList';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      lang: 'All',
      sort: 'stars',
      searchReset: true,
    };
  }

  componentWillReceiveProps({ searchResults }) {
    if (searchResults !== this.props.searchResults) {
      this.setState({ searchReset: false });
    }
  }

  inputOnChangeHandler = searchText => this.setState({ searchText });
  langOnClickHandler = lang => this.setState({ lang });
  sortOnClickHandler = sort => this.setState({ sort });
  setSearchReset = () => this.setState({ searchReset: true });


  render() {
    const { searchReset } = this.state;
    return (
      <main>
        <Searcher
          {...this.state}
          inputOnChange={this.inputOnChangeHandler}
          langOnClick={this.langOnClickHandler}
          sortOnClick={this.sortOnClickHandler}
          setSearchReset={this.setSearchReset}
        />
        { !searchReset && <RepoList {...this.state} /> }
      </main>
    );
  }
}

const mapDispatchToProps = state => ({
  searchResults: state.searchReducer.get('searchResults'),
});

export default connect(mapDispatchToProps)(Main);
