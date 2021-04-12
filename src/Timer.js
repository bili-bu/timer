import React, { Component } from 'react';

class Timer extends Component {
  constructor() {
    super() 
    this.state = {
        timerOn: false,
        h: 0,
        m: 0,
        s: 0,
        ms: 0
    }
  }

  timerInterval = 0

  playHandler = () => {
    this.timerInterval = setInterval(this.runTimer, 10)
    this.runTimer()
    this.setState({ timerOn: true })
  }

  pauseHandler = () => {
    clearInterval(this.timerInterval)
    this.setState({ timerOn: false })
  }

  resetHandler = () => {
    clearInterval(this.timerInterval)
    this.setState({ timerOn: false,h: 0, m: 0, s: 0, ms: 0})
  }

  runTimer = () => {
    let { h, m, s, ms } = this.state
    ms++
    if (ms === 100) {
      s++
      ms = 0
    }
    if (s === 60) {
      m++
      s = 0
    }
    if (m === 60) {
      h++
      m = 0
    }
    this.setState({ ms, s, m, h })
  }

  render() {
    const { timerOn, h, m, s, ms } = this.state
    return (
      <div className="timer">
        <div className="display">
          <span className="units">{(h < 10)? "0" + h : h}</span>:  
          <span className="units">{(m < 10)? "0" + m : m}</span>:
          <span className="units">{(s < 10)? "0" + s : s}</span>:
          <span className="units">{(ms < 10)? "0" + ms : ms}</span>
        </div>
        <div className="controls">
          { timerOn === false && <button onClick={this.playHandler}>Start</button>}
          { timerOn === true && <button onClick={this.pauseHandler}>Pause</button>}
          <button onClick={this.resetHandler}>Reset</button>
        </div>
      </div>
    )
  }
}

export default Timer