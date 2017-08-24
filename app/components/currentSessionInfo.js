import React from 'react';



const currentSessionInfo = (props) => (
	// console.log(data.title);
	<div className = "currentSession">
	<div className="topLine">
		<button className="button" onClick={props.onClick}> back to main syllabus page </button> 
		<span className="date"> {props.month}/{props.day} </span>
		<span className="title"> {props.title} </span>
	</div>
	<p className="description"> {props.description} </p>
	<p className="reading"> {props.reading} </p>
	<p className="assignment"> {props.assignment} </p>

	<p className="linkz">linkz:</p>
	<ul className="linkz-list">
		{props.linkz.map(function(link,index){
			// console.log(link.linkText);
			return (
			<li key= {index} ><a href={link.linkSrc} className="sessionLink">{link.linkText}</a></li>
			)
		})}
	</ul>
	

	<p className="tutorialz">tutorialz:</p>
	<ul className="linkz-list">
		{props.tutorialz.map(function(tutorial,index){
			// console.log(link.linkText);
			return (
			<li key= {index} ><a href={tutorial.linkSrc} className="sessionLink">{tutorial.linkText}</a></li>
			)
		})}
	</ul>

	</div>
	)


export default currentSessionInfo