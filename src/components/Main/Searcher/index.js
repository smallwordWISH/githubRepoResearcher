import React, { Component } from 'react';
import { connect } from 'react-redux';
import { debounce } from 'lodash';

import langList from 'configs/langList';
import { fetchSearchResult, clearSearchResult, openSpinner, closeSpinner } from 'actions';

class Searcher extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      lang: 'All',
      sort: 'stars',
      advancedSettingOpen: false,
      langListOpen: false,
    };
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    return {
      ...prevState,
      searchText: nextProps.searchText,
      lang: nextProps.lang,
      sort: nextProps.sort,
    };
  }

  componentDidUpdate(prevProps, prevState) {
    const { searchText, lang, sort } = this.state;
    const { fetchSearchResult, clearSearchResult, openSpinner, setSearchReset, closeSpinner } = this.props;
    const queryObj = {
      searchText,
      lang,
      sort,
    };
    if ((prevState.lang !== lang || prevState.sort !== sort) && searchText !== '') {
      clearSearchResult();
      setSearchReset();
      openSpinner();
      fetchSearchResult(queryObj);
    }
    if (prevState.searchText !== searchText && searchText !== '') {
      clearSearchResult();
      setSearchReset();
      openSpinner();
      this.debounceSearch();
    }
    if (searchText === '') {
      clearSearchResult();
      closeSpinner();
    }
  }

  // inputOnChangeHandler = searchText => this.setState({ searchText });

  debounceSearch = debounce(() => {
    const { fetchSearchResult } = this.props;
    const { searchText, sort, lang } = this.state;

    const queryObj = {
      searchText,
      lang,
      sort,
    };
    fetchSearchResult(queryObj);
  }, 2000);

  render() {
    const { inputOnChange, langOnClick, sortOnClick } = this.props;
    const { searchText, advancedSettingOpen, langListOpen, lang, sort } = this.state;
    return (
      <section className="searcher-panel">
        <div className="container">
          <h1>Search Github Repo Now</h1>
          <input className="searcher" value={searchText} autoFocus onChange={e => inputOnChange(e.target.value)} />
          <button onClick={() => this.setState({ advancedSettingOpen: !advancedSettingOpen })}>advanced setting</button>
          <div className={`advanced-setting-panel ${advancedSettingOpen ? 'active' : ''}`}>
            <div className="lang-setting">
              <label>Language:</label>
              <ul onClick={() => this.setState({ langListOpen: !langListOpen })}>
                <span>{lang}</span>
                <div className={`lang-list ${langListOpen ? 'active' : ''}`}>
                  {langList.map(item => <li key={item} onClick={() => langOnClick(item)}>{item}</li>)}
                </div>
              </ul>
            </div>
            <div className="sort-setting">
              <label>Sort by:</label>
              <input name="sort" type="radio" value="stars" onClick={e => sortOnClick(e.target.value)} defaultChecked />
              <label>Stars</label>
              <input name="sort" type="radio" value="updated" onClick={e => sortOnClick(e.target.value)} />
              <label>Updated Time</label>
            </div>
          </div>
        </div>
      </section>
    );
  }
}


export default connect(null,
  {
    fetchSearchResult,
    clearSearchResult,
    openSpinner,
    closeSpinner,
  },
)(Searcher);
