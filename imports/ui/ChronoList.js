import React from 'react';
import { Component } from 'react';
import Chrono from './Chrono.js';

export default class ChronoList extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <table><tbody>
        {this.props.items.map((item, index) => (
          <tr key={item.id}>
            <th>#{index+1}</th>
            <td><Chrono /></td>
          </tr>
        ))}
      </tbody></table>
    );
  }
}