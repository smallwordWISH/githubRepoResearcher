import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addSearchResult } from 'actions';

class RepoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      totalPages: '',
      currentPage: '',
    }
  }

  componentWillReceiveProps({searchResults}) {
    console.log(searchResults)
    if (searchResults !== this.props.searchResults && searchResults.items !== undefined) {
      this.setState({
        totalPages: Math.ceil(searchResults.totalPages / 20),
        currentPage: 1,
      });
    }
  }

  renderResultList = () => {
    const { searchResults } = this.props;
    const { currentPage } = this.state;
    if (!searchResults || searchResults.items === undefined ) return null;
    // const itemsEachPage = 20;
    // const newDataArrays = [];
    // for (let i = 0; i < searchResults.items.length; i += itemsEachPage) {
    //   newDataArrays.push = searchResults.items.slice(i, i + itemsEachPage);
    // }
    // console.log(newDataArrays);
    return (
      <div className="container">
        {/* {newDataArrays.map((array, index) => {
          if (index < currentPage) {
            array.map(item => (
              <div className="item">
                <h4>{item.full_name}</h4>
                <h5>{item.language}</h5>
                <h5>{item.stargazers_count}</h5>
                <p>{item.description}</p>
                <l>{item.updated_at}</l>
              </div>
            ));
          }
          return false;
        })} */}
        {
          searchResults.items.map(item => (
            <div className="item">
              <h4>{item.full_name}</h4>
              <h5>{item.language}</h5>
              <h5>{item.stargazers_count}</h5>
              <p>{item.description}</p>
              <l>{item.updated_at}</l>
            </div>
          ))
        }
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
