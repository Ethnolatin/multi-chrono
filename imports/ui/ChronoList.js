import PropTypes from 'prop-types'
import React     from 'react'
import ChronoContainer from './ChronoContainer'

export default class ChronoList extends React.Component {
  // propTypes sert à déclarer les props attendues par ce composant
  // ça affiche un warning dans la console si ces règles ne sont pas respectées
  // ça sert surtout de documentation "intelligente"
  static propTypes = {
    items:              PropTypes.array.isRequired,
    deleteClickHandler: PropTypes.func.isRequired,
  }
  constructor(props) {
    super(props)
  }
  // attention : on ne doit JAMAIS modifier les props (et le state non plus sauf à utiliser setState)
  // ils sont "immutables" = non modifiables
  // c'est pour cette raison que je remonte cette fonction au parent et je la fais passer par les props
  // (il y aussi une raison c'est que maintenant c'est un "composent" donc il ne manipule pas les données
  // directement : il demande à un container parent de le faire pour lui)
  //deleteClick(index) {
  //  this.setState({items: this.props.items.splice(index,1)})
  //}
  // il y a un 2e pb sur cette fonction (mais toujours le même sujet) : splice est une fonction qui
  // modifie le tableau sur laquelle elle s'applique or comme state doit être immutable
  // il ne faut pas utiliser ce type de fonctions "mutables"

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
