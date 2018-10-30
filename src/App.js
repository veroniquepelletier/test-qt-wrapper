import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Qt } from './services/qt';

const qt = new Qt();

class App extends Component {

  componentDidMount() {
    this.sendEvent();
  }

  sendEvent() {
    qt.sendEvent('toto', {value: 'hello'})
    .then(results => {
      console.log('results :' + results);
    })
  }

  render() {
    return (
      <div className="App">
      </div>
    );
  }
}

export default App;
