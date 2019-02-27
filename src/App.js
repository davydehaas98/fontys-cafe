import React, { Component } from 'react'
import image from './beer.gif'
import './App.css'
import moment from 'moment'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      time: moment(),
      target: moment().set({
        'hour': 15,
        'minute': 0,
        'second': 0
      })
    }
  }

  componentDidMount() {
    // Set interval to render
    setInterval(() => {
      this.setState({
        time: moment()
      })
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  countDown() {
    let time = this.state.time
    let target = this.state.target
    // Check if time is less than target
    if (time < target) {
      // Check for next day
      if (time.day() > target.day()) {
        this.setState({
          target: moment().set({
            'hour': 15,
            'minute': 0,
            'second': 0
          })
        })
      }
      let remaining = new Date(target - time)

      return (
        <div>
          <h4>Nope, pas over:</h4>
          <h2>
            {String("00" + remaining.getUTCHours()).slice(-2)}:
            {String("00" + remaining.getUTCMinutes()).slice(-2)}:
            {String("00" + remaining.getUTCSeconds()).slice(-2)}
          </h2>
        </div>
      )
    }
    // It is time for beer
    else {
      return (
        <div>
          <h4>Het is tijd! De hoogste tijd! Haha bier!</h4>
          <img src={image} alt="Beer!" />
        </div>
      )
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Is Cafe 040 open?</h1>
        {this.countDown()}
      </div>
    )
  }
}

export default App
