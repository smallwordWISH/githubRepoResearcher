import React, { Component } from 'react';
import { connect } from 'react-redux';
import { debounce } from 'lodash';
import { addSearchResult } from 'actions';

class RepoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPage: 1,
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentDidUpdate(prevProps, prevState) {
    const { addSearchResult, searchText, lang, sort } = this.props;
    const { currentPage } = this.state;
    const eventHandler = this.handleScroll;
    const queryObj = {
      searchText,
      lang,
      sort,
      page: currentPage,
      eventHandler,
    };
    
    if (prevState.currentPage !== currentPage) {
      addSearchResult(queryObj);
    }
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  debounceAddPage = debounce(() => {
    const { currentPage } = this.state;
    this.setState({ currentPage: currentPage + 1 });
  }, 2000, {
    leading: true,
    trailing: false,
  });

  handleScroll = () => {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      this.debounceAddPage();
    }
  }

  renderResultList = () => {
    const { searchResults } = this.props;
    if (!searchResults || searchResults === undefined) return null;
    return (
      <div className="container">
        {searchResults.map(item => (
          <div key={item.id + item.name} className="item">
            <h4><a href={item.html_url} target="_blank" rel="noopener noreferrer">{item.full_name}</a></h4>
            <h5>{item.language}</h5>
            <h5><span role="img" aria-label="star">⭐️</span>&nbsp;{item.stargazers_count}</h5>
            <p>{item.description}</p>
            <b>Updated: {item.updated_at.replace(/\Z/g, '').replace(/\T/g, ' ')}</b>
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
