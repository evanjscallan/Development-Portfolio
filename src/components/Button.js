import React from "react";
import "./../css/styles.css";

function Button(props) {
	console.log("WORKER PROPS: " + props.worker);
	return (
		<React.Fragment>
			<button
				onClick={(e) => { window.open(props.worker) }}
				className="learn-more">
				{props.text}
			</button>
		</React.Fragment>
	);
}

export default Button;
