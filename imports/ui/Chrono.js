import React from 'react';
import { Component } from 'react';
import Time from './Time.js';

export default class Chrono extends Component {

  constructor(props) {
    super(props);
    this.state = {
      label: 'Go',
      time: 0,
      demarre: null,
    };
    this.incrementCompteur = this.incrementCompteur.bind(this);
    this.goStopClick = this.goStopClick.bind(this);
    this.resetClick = this.resetClick.bind(this);
  }

  incrementCompteur() {
    this.setState({ time: this.state.time + 1 });
  }

  goStopClick() {
    if (!this.state.demarre) {
      this.interval = setInterval(this.incrementCompteur, 1000);
      this.setState({ label: "Stop" });
    } else {
      clearInterval(this.interval);
      this.setState({ label: "Go" });
    }
    this.state.demarre = !this.state.demarre;
  }

  resetClick() {
    this.setState({ time: 0 });
  }

  render() {
    return (
      <table><tbody><tr>
        <td><Time time={new Date(0, 0, 0, 0, 0, Number(this.state.time))}/></td>
        <td><button onClick={this.goStopClick}>{this.state.label}</button></td>
        <td><button id="reset" onClick={this.resetClick}>Reset</button></td>
      </tr></tbody></table>
    );
  }

}