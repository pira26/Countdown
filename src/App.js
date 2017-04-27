import React, { Component } from 'react';

import Time from './containers/Time.jsx';

export default class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			deadline: "December 26, 2017",
			newDeadline: ""
		}
	}

	changeDeadline() {
		this.setState({deadline: this.state.newDeadline});
	}

  	render() {
    	return (
      		<div className="App">
      			<div className="title">Countdown to {this.state.deadline}</div>
  				<Time deadline={this.state.deadline}/>
      			<div>
      				<input placeholder="New Date" 
      					   onChange={e => this.setState({newDeadline: e.target.value})}/>
      				<button onClick={() => this.changeDeadline()}>Submit</button>
      			</div>
      		</div>
    	);
  	}
}
