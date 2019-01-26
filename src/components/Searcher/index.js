import React, { Component } from 'react';
import { connect } from 'react-redux';


import langList from 'configs/langList';
import { fetchSearchResult } from 'actions';

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

  inputOnChangeHandler = (searchText) => {
    this.setState({ searchText });
  }


  render() {
    const { searchText, advancedSettingOpen, langListOpen, lang } = this.state;
    return (
      <section className="searcher-panel">
        <div className="container">
          <h1>Search Github Repo Now</h1>
          <input value={searchText} onChange={(e) => { this.inputOnChangeHandler(e.target.value); }} />
          <button onClick={() => this.setState({ advancedSettingOpen: !advancedSettingOpen })}>advanced setting</button>
          <div className={`advanced-setting-panel ${advancedSettingOpen ? 'active' : ''}`}>
            <div className="lang-setting">
              <label>Language:</label>
              <ul onClick={() => this.setState({ langListOpen: !langListOpen })}>
                <span>{lang}</span>
                <div className={`lang-list ${langListOpen ? 'active' : ''}`}>
                  {langList.map(item => <li key={item} onClick={() => { this.setState({ lang: item }); }}>{item}</li>)}
                </div>
              </ul>
            </div>
            <div className="sort-setting">
              <label>Sort by:</label>
              <input name="sort" type="radio" value="stars" onClick={(e) => { this.setState({ sort: e.target.value }) }} />
              <label>Stars</label>
              <input name="sort" type="radio" value="updated" onClick={(e) => { this.setState({ sort: e.target.value }) }} />
              <label>Updated Time</label>
            </div>
          </div>
        </div>
      </section>
    );
  }
}


export default connect(null, { fetchSearchResult })(Searcher);
