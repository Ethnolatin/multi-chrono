import React from 'react'
import Chrono from './Chrono'

export default class ChronoContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      time:        0,
      timeDisplay: 0,
      demarre:     null,
      lap:         null,
    }
    this.incrementCompteur = this.incrementCompteur.bind(this)
    this.goStopClick       = this.goStopClick.bind(this)
    this.lapClick          = this.lapClick.bind(this)
    this.resetClick        = this.resetClick.bind(this)
  }
  // voici à mon avis le meilleur moyen de gérer le pb du compteur qui ne s'arrête pas quand on
  // le supprime. C'est une méthode spéciale de React.Component qui est appelé quand le
  // composant est démonté (= sorti du DOM par son parent)
  // documentation de React.Component :  https://reactjs.org/docs/react-component.html
  componentWillUnmount() {
    clearInterval(this.interval)
  }
  incrementCompteur() {
    this.setState({ time: this.state.time + 1 })
  }
  goStopClick() {
    if (!this.state.demarre) {
      this.interval = setInterval(this.incrementCompteur, 1000)
    } else {
      clearInterval(this.interval)
    }
    //this.state.demarre = !this.state.demarre;
    // on ne doit pas manipuler le state autrement qu'avec setState (et d'ailleurs normalement
    // ça ne fonctionne pas car ça n'entraîne pas de recalcul de render)
    // chaque appel à setState relance render donc il faut aussi ne pas enchaîner les setState
    // pour ne pas enchaîner les render qui sont l'opération la plus coûteuse en gérénal
    this.setState({demarre: !this.state.demarre})
  }
  lapClick = () => this.setState({lap: !this.state.lap, timeDisplay: this.state.time})

  resetClick() {
    this.setState({
      time: 0,
      timeDisplay: 0,
      lap: null
    });
  }
  // on ne doit pas mettre dans le state quelque chose qui découle de manière déterministe
  // d'une autre info qui est dans le state ; il faut à la place créer une fonction qui implémente
  // la règle :
  goStopLabel = (isStarted) => isStarted ? 'Stop' : 'Go'

  // de la même manière tu as une duplication de code entre lapClick et incrementCompteur
  // que tu peux éviter avec une fonction qui sera appelée par render et sans utiliser le state :
  displayedTime = (state) => !state.lap ? state.time : state.timeDisplay

  render() {
    return (
      <Chrono
        timeDisplay={this.displayedTime(this.state)}
        goStopClickHandler={this.goStopClick}
        goStopLabel={this.goStopLabel(this.state.demarre)}
        lapClickHandler={this.lapClick}
        resetClickHandler={this.resetClick}
      />
    )
  }

}
