import React, { Component } from 'react';
import '../App.css';

class GameList extends Component {
  render() {
    return (
      <div className="AppList">
        <ul>
            <li>
                <a href="targetballhero.com">Target Ball Herp</a>
            </li>
        </ul>
      </div>
    );
  }
}

export default GameList;