import React, { Component } from 'react';
import Game from './Game';
import Rando from './Rando';
import Button from './Button';
import './App.css';
import BrokenClick from './BrokenClick';
import RandomButton from './RandomButton';

class App extends Component {
  render() {
    return <div className="App">
      <RandomButton />
    </div>;
  }
}

export default App;