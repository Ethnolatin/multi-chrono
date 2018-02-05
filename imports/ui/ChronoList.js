import React from 'react';
import { Component } from 'react';
import Chrono from './Chrono.js';

export default class ChronoList extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul>
        {this.props.items.map((item, index) => (
          <li key={item.id}>
            <span>#{index+1} - </span>
            <Chrono />
          </li>
        ))}
      </ul>
    );
  }
}