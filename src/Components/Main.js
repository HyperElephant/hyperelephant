import React, { Component } from 'react';
import '../App.css';
import {Switch, Route} from 'react-router-dom';

import Home from './Home';
import AppList from './AppList';
import GameList from './GameList';

class Main extends Component {
  render() {
    return (
      <main className="AppList">
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/apps' component={AppList}/>
            <Route path='/games' component={GameList}/>
        </Switch>
      </main>
    );
  }
}

export default Main;