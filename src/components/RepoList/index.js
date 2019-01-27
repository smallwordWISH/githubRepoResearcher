import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addSearchResult } from 'actions';

class RepoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPage: '',
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  componentWillReceiveProps({ searchResults }) {
    console.log(searchResults);
    if (searchResults !== this.props.searchResults && searchResults !== undefined) {
      this.setState({
        currentPage: 1,
      });
    }
  }

  handleScroll = () => {
    const { addSearchResult } = this.props;
    const { currentPage } = this.state;
    const queryObj = {
      searchText: 'react',
      lang: 'HTML',
      sort: 'stars',
      page: currentPage,
    };
    console.log(window.innerHeight, window.scrollY);
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      console.log('here');
      this.setState({ currentPage: currentPage + 1 }, () => {
        addSearchResult(queryObj);
      });
    }
  }

  renderResultList = () => {
    const { searchResults } = this.props;
    const { currentPage } = this.state;
    if (!searchResults || searchResults === undefined) return null;
    return (
      <div className="container">
        {searchResults.map(item => (
          <div className="item">
            <h4>{item.full_name}</h4>
            <h5>{item.language}</h5>
            <h5>{item.stargazers_count}</h5>
            <p>{item.description}</p>
            <l>{item.updated_at}</l>
          </div>
        ))}
      </div>
    );
  }

  render() {
    return (
      <div className="result-panel">
        {this.renderResultList()}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  searchResults: state.searchReducer.get('searchResults'),
});

export default connect(mapStateToProps, { addSearchResult })(RepoList);
