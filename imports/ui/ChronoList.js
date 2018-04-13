import PropTypes from 'prop-types'
import React     from 'react'
import {saveLabel,
        saveStart,
        saveStop,
        saveLap}       from '../lib/storageManagement'
import ChronoContainer from './ChronoContainer'

export default class ChronoList extends React.Component {
  
  static propTypes = {
    items: PropTypes.array.isRequired,
  }
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <table><tbody>
        {this.props.items.map((item, index) => (
          <tr key={item.id}>
            <td><ChronoContainer
              {...this.props.initialData[index]}
              index             ={index}
              saveLabel         ={(labelValue) => saveLabel(index, labelValue)}
              saveStart         ={(startTime)  => saveStart(index, startTime)}
              saveStop          ={(stopTime)   => saveStop(index, stopTime)}
              saveLap           ={(lapDisplay) => saveLap(index, lapDisplay)}
              deleteClickHandler={this.props.deleteChrono(index)} />
            </td>
          </tr>
        ))}
      </tbody></table>
    )
  }
}
