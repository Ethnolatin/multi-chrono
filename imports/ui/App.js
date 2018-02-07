import React from 'react';
import { Component } from 'react';
import ChronoList from './ChronoList.js';

export default class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = { items: [] };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    const newItem = { id: Date.now() };
    this.setState(prevState => ({ items: prevState.items.concat(newItem) }));
  }

  render() {
    return (
      <div>
        <ChronoList items={this.state.items} />
        <button onClick={this.handleSubmit}>Add new</button>
      </div>
    );
  }
}
