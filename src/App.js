import React, { Component } from 'react'
import logo from './fidgetspinner.png'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Is het al tijd voor bier?</p>
          <h1>JA.</h1>
        </header>
      </div>
    )
  }
}

export default App
