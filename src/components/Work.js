import React, { useState } from "react";
import Button from "./Button";
import orcaImg from "./../img/orca_macbook.webp";
import languageImg from "./../img/emis_mockup.webp";
import healthImg from "./../img/mh_placeholder_tablet.webp";
import battleImg from "./../img/battle_desktop_orange.webp";
import "./../css/styles.css";
import PropTypes from 'prop-types'


import { AiOutlineCloseCircle } from "react-icons/ai";




export default function Work(props, styles) {
	const setWorkVisible = props.workState;

	const WorkInfo = (props) => {
		console.log("SITELINK PROPS: " + props.wtf)
	
	return (
		<React.Fragment>
			
			<div className="work-background-image">
				<div className='work-overlay'>
					<div className='work-text'>
					<h2 className="work-descrip">{props.title}</h2>
					<p className="work-descrip">{props.description}</p>
						
							<Button
							text="LEARN MORE"
							worker={props.wtf}/>
						
					</div>
				</div>
				<img
					src={props.bgImage}
					alt={props.bgAltText}/>
				</div>	
		</React.Fragment>
	);
};

	return (
		
			
			<section>
				<article 
				className="work-bottom-l"
						style={
						setWorkVisible
							? { transform: `translateY(${200}%)` }
							: { transform: `translateY(${100}%)` }}>
					<div className="flex-ctr-col">
						<WorkInfo
							bgImage={healthImg}
							title="Mental Health Finder"
							wtf='https://mhfinder.netlify.app/' 
							description="Helps users find local mental heathcare providers in their area. Google Geocode/Maps API combined with data-mined directory."
							bgAltText='The words "mental health" written on a clipboard.'/>
					</div>
				</article>

				<article className="work-bottom-r"
						style={
						setWorkVisible
							? { transform: `translateY(${200}%)` }
							: { transform: `translateY(${100}%)` }}>
					<div className="flex-ctr-col" >
						<WorkInfo
							bgImage={orcaImg}
							title="Orcahome"
							wtf='https://orcasound.net' 
							description="Front-End developer for React App. Coordinating with team to integrate front-end website with app."
							bgAltText="Orca whales swimming in the ocean."/>
					</div>
				</article>


				<article className="work-top-l"
						style={
						setWorkVisible
							? { transform: `translateY(${-100}%)` }
							: { transform: `translateY(${0}%)` }}>
					<div className="flex-ctr-col">
						<WorkInfo
							bgImage={battleImg}
							title="Github Battle"
							wtf='https://github.com' 
							description="It's Battle time. Utilizing React and Github API to compare user data in the form of a game."
							bgAltText="Application mockup on devices for github battle"/>
					</div>
				</article>

				<article className="work-top-r"
						style={
						setWorkVisible
							? { transform: `translateY(${-100}%)` }
							: { transform: `translateY(${0}%)` }}>
					
					<div className="flex-ctr-col">
						<WorkInfo
							bgImage={languageImg}
							title="The Emissary"
							wtf='https://emissarytranslator.herokuapp.com/' 
							description="Language translator with a retro twist. Deployed on Heroku."
							bgAltText="Application mockup on devices for github battle"/>
					</div>
				</article>
			</section>
	);
}

							
