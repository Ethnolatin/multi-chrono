import React from 'react'
import ChronoList from './ChronoList'

export default class ChronoListContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state           = {items: []}
    this.deleteChrono    = this.deleteChrono.bind(this)
    this.addClickHandler = this.addClickHandler.bind(this)
  }
  addClickHandler(e) {
    const newItem = {id: Date.now()}
    this.setState(prevState => ({items: prevState.items.concat(newItem)}))
  }

  deleteChrono(index) {
    return () => {
      const items = this.state.items
      this.setState({items: [
        ...items.slice(0, index),
        ...items.slice(index + 1)
      ]})
    }
  }

  render() {
    return (
      <div>
        <ChronoList
          items={this.state.items}
          deleteChrono={this.deleteChrono}
        />
        <button onClick={this.addClickHandler}>Add new</button>
      </div>
    )
  }
}
