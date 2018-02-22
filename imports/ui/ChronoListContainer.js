import React from 'react'
import ChronoList from './ChronoList'

export default class ChronoListContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {items: []}
    this.deleteClickHandler = this.deleteClick.bind(this)
    this.addClickHandler    = this.addClickHandler.bind(this)
  }
  addClickHandler(e) {
    const newItem = {id: Date.now()}
    this.setState(prevState => ({items: prevState.items.concat(newItem)}))
  }
  deleteClick(index) {
    const items = this.state.items
    this.setState({items: [
      ...items.slice(0, index),
      ...items.slice(index + 1, items.length)
    ]})
    // équivalent à
    // const a = items.slice(0, index)
    // const b = items.slice(index + 1, items.length)
    // this.setState({items: a.concat(b)})
    // les éléments sont copiés donc il n'y a pas de pb de mutation
  }
  render() {
    return (
      <div>
        <ChronoList
          items={this.state.items}
          deleteClickHandler={this.deleteClickHandler}
        />
        <button onClick={this.addClickHandler}>Add new</button>
      </div>
    )
  }
}
