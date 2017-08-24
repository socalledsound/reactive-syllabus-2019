import React from 'react';
var PropTypes = require('prop-types');


function AllSessions (props) {

		return (
			<div className = "allSessions"
					onClick = {props.onClick.bind(null,props.sessionVal)}>
				<p className="allSessionsLine">
					<span className="date"> {props.month}/{props.day} </span>
					<span className="all-title">     {props.title} </span>
				</p>
			
			</div>

		)
	

}
	// console.log(data.title);

AllSessions.propTypes = {
	sessionVal: PropTypes.number.isRequired,
	month: PropTypes.number.isRequired,
	day: PropTypes.number.isRequired,
	title: PropTypes.string.isRequired,
}	


export default AllSessions;