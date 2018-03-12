import React from 'react'
import ChronoLabel from './ChronoLabel'

export default class ChronoLabelContainer extends React.Component {

	constructor(props) {
    super(props)
    this.state = {
    	labelValue: 'Nom',
    	displayForm: true
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({labelValue: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({displayForm: false});
  }
 
  render() {
    return (
      <ChronoLabel
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        displayForm={this.state.displayForm}
        labelValue={this.state.labelValue}
      />
    )
  }
}