import React, { Component } from 'react';
import Game from './Game';
import Rando from './Rando';
import Button from './Button';
import './App.css';
import BrokenClick from './BrokenClick';

class App extends Component {
  render() {
    return <div className="App">
      <BrokenClick />
    </div>;
  }
}

export default App;