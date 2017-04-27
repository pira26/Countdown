import React, { Component } from 'react';


export default class Time extends Component {

	constructor(props) {
		super(props);
		this.state = {
			days: 0,
			hours: 0,
			minutes: 0,
			seconds: 0
		}
	}

	componentWillMount() {
		this.getTimeUntil(this.props.deadline);
	}

	componentDidMount() {
		setInterval(() => this.getTimeUntil(this.props.deadline), 1000);
	}

	leading0(num) {
		return num < 10 ? "0" + num : num; 
	}

	getTimeUntil(deadline) {
		const time = Date.parse(deadline) - Date.parse(new Date());
		//console.log('time is: ', time);
		
		const seconds = Math.floor((time/1000)%60);
		const minutes = Math.floor((time/1000/60)%60);
		const hours = Math.floor(time/(1000*60*60)%24);
		const days = Math.floor(time/(1000*60*60*24));
		
		this.setState({days, hours, minutes, seconds});
		//console.log(`time2 is: ${days} ${hours} ${minutes} ${seconds}`);

	}

	render() {
		return(
  			<div>
  				<div className="days">{this.leading0(this.state.days)}</div>
  				<div className="hours">{this.leading0(this.state.hours)}</div>
  				<div className="minutes">{this.leading0(this.state.minutes)}</div>
  				<div className="seconds">{this.leading0(this.state.seconds)}</div>
  			</div>
		)
	}
}