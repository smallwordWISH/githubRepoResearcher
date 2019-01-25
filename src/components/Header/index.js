import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header>
        <div className="container">
          <nav>
            <Link to="/">Github Repo Searcher</Link>
          </nav>
        </div>
      </header>
    )
  }
}

export default Header;