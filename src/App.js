import React, { Component } from 'react'
import logo from './beer.gif'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Is Fontys cafe open?</p>
          <h1>JA!</h1>
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
    )
  }
}

export default App
