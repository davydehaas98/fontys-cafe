import React, { Component } from 'react'
import image from './beer.gif'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Is het Fontys cafe open?</h1>
        <h2>Misschien?</h2>
        <img src={image} />
      </div>
    )
  }
}

export default App
