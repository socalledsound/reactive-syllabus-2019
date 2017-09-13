import React from 'react';
import SyllabusData from './SyllabusData.js';
import CurrentSessionInfo from './currentSessionInfo.js';
import AllSessions from './AllSessions.js';


var x = new Date();
var currentMonth  = x.getMonth();
var currentDay = x.getDate();

// currentMonth = 10;



let sessions = SyllabusData.sessions;

let filteredSessions = sessions.filter(function(session){
	return session.month >= currentMonth
})

class Syllabus extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentSession:null,
			}
	
		this.selectSession = this.selectSession.bind(this);
		this.resetSession = this.resetSession.bind(this);

		}

	selectSession(key) {
		console.log('trig');
		this.setState(function(){
			return {
				currentSession: key
			}
		})
	} 

	resetSession() {
		this.setState(function(){
			return {
				currentSession: null
			}
		})
	}

	resetFilteredSessions() {

			filteredSessions = sessions;
		
	}


	render () {
		var currentSession = this.state.currentSession;

		if(currentSession !== null) {
			var activeSession = sessions.filter(function(session){
					return session.key === currentSession;
			})
		}

		// console.log(activeSession[0].linkz);

		return (

			<div className='column'>
				

	
				{currentSession === null &&
					<div>
					// <button className="show-all-button" onClick={this.resetFilteredSessions}>show older dates</button>
					<ul> 
						{filteredSessions.map(function(session){
							return (
								<AllSessions
									onClick={this.selectSession}
									month = {session.month}
									day = {session.day}	
									title = {session.title}
									key  = {session.key}
									sessionVal = {session.key}

								/>
							)
						}.bind(this))}
					
					</ul>
					</div>									
				}

				{currentSession !== null &&

						<CurrentSessionInfo 
							onClick={this.resetSession}
							month = {activeSession[0].month}
							day = {activeSession[0].day}	
							title = {activeSession[0].title}
							description = {activeSession[0].description}
							reading = {activeSession[0].reading}
							assignment =  {"Assignment:" + activeSession[0].assignment}
							linkz = {activeSession[0].linkz}
							tutorialz = {activeSession[0].tutorialz}
							key  = {activeSession[0].key}
						/>					
				}
			

			</div>


			)	

	}

}



export default Syllabus;				



		


