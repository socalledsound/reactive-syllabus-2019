import React from 'react';
var PropTypes = require('prop-types');


class AllSessions extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			currentSession:null,
			}
	
		this.changeSession = this.changeSession.bind(this);


	}

	changeSession(key) {
		console.log('trig');
		this.setState(function(){
			console.log(key);
			return {
				currentSession: key
			}
		})
	} 


	render() {
		return (
			<div className = "allSessions"
					onClick = {this.changeSession.bind(null,this.props.sessionVal)}>
				<p className="allSessionsLine">
					<span className="date"> {this.props.month}/{this.props.day} </span>
					<span className="title">     {this.props.title} </span>
				</p>
			
			</div>

		)
	}

}
	// console.log(data.title);

AllSessions.propTypes = {
	sessionVal: PropTypes.number.isRequired,
	month: PropTypes.number.isRequired,
	day: PropTypes.number.isRequired,
	title: PropTypes.string.isRequired,
}	


export default AllSessions;