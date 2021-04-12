import React, { Component } from 'react';

class Timer extends Component {
  constructor() {
    super() 
    this.state = {
        timerOn: false,
        time: 0,
        start: 0
    }
  }

  timerInterval = 0

  playHandler = () => {
    this.setState({ 
      timerOn: true,
      time: this.state.time,
      start: Date.now() - this.state.time 
    })
    this.timerInterval = setInterval(() => {
      this.setState({
        time: Date.now() - this.state.start
      })
    }, 10)
  }

  pauseHandler = () => {
    clearInterval(this.timerInterval)
    this.setState({ timerOn: false })
  }

  resetHandler = () => {
    clearInterval(this.timerInterval)
    this.setState({ 
      timerOn: false, 
      time: 0, 
      start: 0
    })
  }

  render() {
    const { timerOn, time } = this.state
    let ms = ("0" + (Math.floor(time / 10) % 100)).slice(-2);
    let s = ("0" + (Math.floor(time / 1000) % 60)).slice(-2);
    let m = ("0" + (Math.floor(time / 60000) % 60)).slice(-2);
    let h = ("0" + Math.floor(time / 3600000)).slice(-2);

    return (
      <div className="timer">
        <div className="display">
          <span className="units">{ h }</span>:  
          <span className="units">{ m }</span>:
          <span className="units">{ s }</span>:
          <span className="units">{ ms }</span>
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