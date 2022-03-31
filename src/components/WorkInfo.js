import React from "react";
import "./../css/styles.css";
import Button from "./Button";

const WorkInfo = (props) => {
	return (
		<React.Fragment>
			
			<div className="work-background-image">
				<div className='work-overlay'>
					<div className='work-text'>
					<h2 className="work-descrip">{props.title}</h2>
					<p className="work-descrip">{props.description}</p>
					<Button sitelink={props.siteLink2} text="LEARN MORE"/>
					</div>
				</div>
				<img
					src={props.bgImage}
					alt={props.bgAltText}/>
				</div>

				
			
		</React.Fragment>
	);
};

export default WorkInfo;
