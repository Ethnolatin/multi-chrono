import React from 'react';
import { Component } from 'react';
import Chrono from './Chrono.js';

export default class ChronoList extends Component {

  constructor(props) {
    super(props);
    this.state = { items: [] };
    this.deleteClick = this.deleteClick.bind(this);
  }

  deleteClick(index) {
    this.setState({items: this.props.items.splice(index,1) });
  }

  render() {
    return (
      <table><tbody>
        {this.props.items.map((item, index) => (
          <tr key={item.id}>
            <th>#{index+1}</th>
            <td><Chrono /></td>
            <td><button id="black" onClick={() => this.deleteClick(index)}>Delete</button></td>
          </tr>
        ))}
      </tbody></table>
    );
  }
}