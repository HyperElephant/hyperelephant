import React, { Component } from 'react';
import '../App.css';

class GameList extends Component {
  render() {
    return (
      <div className="AppList">
        <ul>
            <li>
                <a href="https://www.targetballhero.com">Target Ball Hero</a>
            </li>
        </ul>
      </div>
    );
  }
}

export default GameList;