import PropTypes from 'prop-types'
import React     from 'react'
import ChronoContainer from './ChronoContainer'

export default class ChronoList extends React.Component {
  
  static propTypes = {
    items:              PropTypes.array.isRequired,
    deleteClickHandler: PropTypes.func.isRequired,
  }
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <table><tbody>
        {this.props.items.map((item, index) => (
          <tr key={item.id}>
            <th>#{index+1}</th>
            <td><ChronoContainer /></td>
            <td>
              <button
                className="black-button"
                onClick={() => this.props.deleteClickHandler(index)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody></table>
    )
  }
}
