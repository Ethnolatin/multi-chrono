import React from 'react'
import Chrono from './Chrono'

export default class ChronoContainer extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      startTime:   0,
      stopTime:    null,
      timeDisplay: 0,
      labelValue: 'Nom',
      lap:         null
    }
    const time = Date.now()-this.state.startTime
    const started = !!this.state.startTime && !this.state.stopTime
    console.log(started)
    this.handleChange      = this.handleChange.bind(this)
    this.handleSubmit      = this.handleSubmit.bind(this)
    this.displayedTime     = this.displayedTime.bind(this)
    this.goClick           = this.goClick.bind(this)
    this.stopClick         = this.stopClick.bind(this)
    this.lapClick          = this.lapClick.bind(this)
    this.resetClick        = this.resetClick.bind(this)
  }

  handleChange(event) {
    this.setState({labelValue: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  displayedTime = (state) => !state.lap ? Date.now()-this.state.startTime : state.timeDisplay;

  goClick() {
    this.setState({startTime: Date.now()})
  }

  stopClick() {
    this.setState({stopTime: Date.now()})
  }

  lapClick = () => this.setState({lap: !this.state.lap, timeDisplay: this.props.time})

  resetClick() {
    this.setState({
      startTime:   null,
      stopTime:    null,
      timeDisplay: 0,
      lap:         null
    });
  }

  render() {
    console.log(this.props.started)
    return (
      <Chrono
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        labelValue={this.state.labelValue}
        timeDisplay={this.displayedTime(this.state)}
        goClickHandler={this.goClick}
        stopClickHandler={this.stopClick}
        lapClickHandler={this.lapClick}
        resetClickHandler={this.resetClick}
        deleteClickHandler={this.props.deleteClickHandler}
        started={this.props.started}
      />
    )
  }

}
