import React from 'react'
import ChronoList from './ChronoList'
import {addStoredChrono, deleteStoredChrono} from '../lib/storageManagement'

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
    addStoredChrono()
  }

  deleteChrono(index) {
    return () => {
      deleteStoredChrono(index)
      const items = this.state.items
      this.setState({items: [
        ...items.slice(0, index),
        ...items.slice(index + 1, items.length)
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
