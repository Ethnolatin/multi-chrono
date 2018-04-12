import PropTypes from 'prop-types'
import React     from 'react'
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
            <td><ChronoContainer deleteClickHandler={this.props.deleteChrono(index)} /></td>
          </tr>
        ))}
      </tbody></table>
    )
  }
}
