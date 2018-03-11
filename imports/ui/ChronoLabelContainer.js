export default class ChronoLabel extends React.Component {
	constructor(props) {
    super(props)
    this.state = {
    	value: 'Nom',
    	displayForm: true
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({displayForm: false});
  }

  const nameInput =
  		<form onSubmit={this.handleSubmit}>
        <label>
          <input type="text" value={this.state.value} onChange={this.handleChange} />
          <input type="submit" value="Envoi" />
        </label>
      </form>
  
  render() {
  	return (
    	this.state.displayForm ? <span>{this.nameInput}</span> :
      <span>{this.state.value}</span>
     );
  }
}