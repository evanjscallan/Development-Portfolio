import React from "react";
import Index from "./Index";
import "./../css/styles.css";


export default class Layout extends React.Component {
	render() {
		return (
			<React.Fragment>
				<div className="layout">
					<Index />
				</div>
			</React.Fragment>
		);
	}
}