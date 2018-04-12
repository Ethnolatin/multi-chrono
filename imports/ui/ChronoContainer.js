import React from 'react'
import Chrono from './Chrono'

export default class ChronoContainer extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      time:        0,
      timeDisplay: 0,
      started:     null,
      lap:         null,
      labelValue: 'Nom',
      displayForm: true
    }
    this.handleChange      = this.handleChange.bind(this)
    this.handleSubmit      = this.handleSubmit.bind(this)
    this.incrementCompteur = this.incrementCompteur.bind(this)
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
    this.setState({displayForm: false});
  }
 
  incrementCompteur() {
    this.setState({ time: this.state.time + 1 })
  }

  displayedTime = (state) => !state.lap ? state.time : state.timeDisplay;

  goClick() {
    this.interval = setInterval(this.incrementCompteur, 1000)
    this.setState({started: !this.state.started})
  }

  stopClick() {
    clearInterval(this.interval)
    this.setState({started: !this.state.started})
  }
  
  lapClick = () => this.setState({lap: !this.state.lap, timeDisplay: this.state.time})

  resetClick() {
    this.setState({
      time: 0,
      timeDisplay: 0,
      lap: null
    });
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    return (
      <Chrono
        started={this.state.started}
        timeDisplay={this.displayedTime(this.state)}
        goClickHandler={this.goClick}
        stopClickHandler={this.stopClick}
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
