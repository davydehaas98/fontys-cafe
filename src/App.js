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
        'hour': 18,
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
            'hour': 18,
            'minute': 0,
            'second': 0
          })
        })
      }
      let remaining = new Date(target - time)
      return (
        <div>
          <h2>
            {remaining.getUTCHours()}:{remaining.getUTCMinutes()}:{remaining.getUTCSeconds()}
          </h2>
        </div>
      )
    }
    // It is time for beer
    else {
      return (
        <div>
          <h4>Het is tijd! De hoogste tijd!</h4>
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
