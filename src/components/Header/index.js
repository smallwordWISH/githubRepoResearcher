import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {

  render() {
    return (
      <header>
        <nav>
          <div className="container">
            <Link to="/" onClick={() => window.scrollTo(0, 0)}>Github Repo Researcher</Link>
          </div>
        </nav>
      </header>
    )
  }
}

export default Header;