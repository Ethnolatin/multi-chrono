import React from 'react'
import Chrono from './Chrono'

export default class ChronoContainer extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      time:        0,
      timeDisplay: 0,
      demarre:     null,
      lap:         null,
      labelValue: 'Nom',
      displayForm: true
    }
    this.incrementCompteur = this.incrementCompteur.bind(this)
    this.goStopClick       = this.goStopClick.bind(this)
    this.lapClick          = this.lapClick.bind(this)
    this.resetClick        = this.resetClick.bind(this)
    this.handleChange      = this.handleChange.bind(this)
    this.handleSubmit      = this.handleSubmit.bind(this)
    }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  handleChange(event) {
    this.setState({labelValue: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.saveLabel(this.state.labelValue)
    this.setState({displayForm: false})
  }
 
  incrementCompteur() {
    this.setState({ time: this.state.time + 1 })
  }

  goStopClick() {
    if (!this.state.demarre) {
      this.interval = setInterval(this.incrementCompteur, 1000)
      this.props.saveStart(Date.now())
      this.props.saveStop(null)
    } else {
      clearInterval(this.interval)
      this.props.saveStop(Date.now())
    }

    this.setState({demarre: !this.state.demarre})
  }
  
  lapClick () {
    const newLap = !this.state.lap
    if (newLap) {
      this.props.saveLap(this.state.time)
    } else {
      this.props.saveLap(null)
    }
    this.setState({
      lap: newLap,
      timeDisplay: this.state.time
    })
  }

  resetClick() {
    this.props.saveStart(Date.now())
    this.props.saveStop(null)
    this.props.saveLap(null)
    this.setState({
      time: 0,
      timeDisplay: 0,
      lap: null
    });
  }

  goStopLabel = (isStarted) => isStarted ? 'Stop' : 'Go'

  displayedTime = (state) => !state.lap ? state.time : state.timeDisplay

  render() {
    return (
      <Chrono
        timeDisplay={this.displayedTime(this.state)}
        goStopClickHandler={this.goStopClick}
        goStopLabel={this.goStopLabel(this.state.demarre)}
        lapClickHandler={this.lapClick}
        resetClickHandler={this.resetClick}
        deleteClickHandler={this.props.deleteClickHandler}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        displayForm={this.state.displayForm}
        labelValue={this.state.labelValue}
      />
    )
  }

}
