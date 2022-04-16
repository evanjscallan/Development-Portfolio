import React from "react";
import Button from "./Button";
import orcaImg from "./../img/work/orcamac.webp";
import languageImg from "./../img/work/emis_mockup.webp";
import healthImg from "./../img/work/mh_placeholder_tablet.webp";
import battleImg from "./../img/work/battle_desktop_orange.webp";
import "./../css/styles.css";

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
							title="MHFinder"
							wtf='https://mhfinder.netlify.app/' 
							description="Using Data Mining and Google APIs find local mental heathcare providers in their area."
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
							description="Working with team to integrate listening conservation app (React) into front-end website."
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
							wtf='https://boisterous-mochi-7610a3.netlify.app/' 
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
							description="Language translator with a retro twist. Deployed with Flask on Heroku."
							bgAltText="Application mockup on devices for github battle"/>
					</div>
				</article>
			</section>
	);
}

							
