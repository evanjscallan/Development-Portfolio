import React from "react";
import Nav from "./Nav";
import Index from "./Index";
import "./../css/styles.css";

const stickyClass = "header-about-2";

export default class Layout extends React.Component {
	constructor(props) {
		super(props);
	}

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