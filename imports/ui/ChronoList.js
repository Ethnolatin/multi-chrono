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
        {this.props.items.map((item) => (
          <li key={item.id}>
            <Chrono />
          </li>
        ))}
      </ul>
    );
  }
}