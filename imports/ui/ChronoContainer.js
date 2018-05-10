import React from 'react'
import Chrono from './Chrono'

export default class ChronoContainer extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      startTime:   0,
      stopTime:    0,
      timeDisplay: 0,
      labelValue: 'Nom',
      lap: null
    }

    this.handleChange      = this.handleChange.bind(this)
    this.handleSubmit      = this.handleSubmit.bind(this)
    this.displayedTime     = this.displayedTime.bind(this)
    this.incrementCompteur = this.incrementCompteur.bind(this)
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

  displayedTime = () => !this.state.lap ? (Date.now()-this.state.startTime)/1000 : this.state.timeDisplay

  incrementCompteur() {
    this.setState({timeDisplay: this.displayedTime()})
  }

  goClick() {
    this.setState({startTime: Date.now()-(this.state.stopTime-this.state.startTime), stopTime: 0})
    this.interval = setInterval(this.incrementCompteur, 1000)
  }

  stopClick() {
    clearInterval(this.interval)
    this.setState({stopTime: Date.now()})
  }

  lapClick = () => this.setState({lap: !this.state.lap})

  resetClick() {
    this.setState({
      startTime:   0,
      stopTime:    0,
      timeDisplay: 0,
      lap:         null
    });
    clearInterval(this.interval)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    return (
      <Chrono
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        labelValue={this.state.labelValue}
        timeDisplay={this.state.timeDisplay}
        goClickHandler={this.goClick}
        stopClickHandler={this.stopClick}
        lapClickHandler={this.lapClick}
        resetClickHandler={this.resetClick}
        deleteClickHandler={this.props.deleteClickHandler}
        started={!!this.state.startTime && !this.state.stopTime}
      />
    )
  }

}
