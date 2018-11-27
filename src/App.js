import React, { Component } from 'react'
import logo from './beer.gif'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Is het Fontys cafe open?</h1>
        <h2>Misschien?</h2>
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    )
  }
}

export default App
