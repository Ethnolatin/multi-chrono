import React, { Component } from 'react';
import TimeFormat from 'react-time-format';

export default class Time extends Component {

	constructor(props) {
		super(props);
	}
	
	render() {
	    return (
	      <TimeFormat value={this.props.time} format='HH:mm:ss'/>
	    );
  }
}