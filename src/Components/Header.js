import React, { Component } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className="App-header">
          <h2>Hyper Elphant</h2>
          <nav>
          <ul className="header-list">
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/apps'>Apps</Link></li>
            <li><Link to='/games'>Games</Link></li>
          </ul>
        </nav>
        </div>
      </div>
    );
  }
}

export default Header;