import React from "react";
import "./../css/styles.css";

const Button = (props) => {
	console.log("WORKER PROPS: " + props.worker);
	return (
		<>
			<button
				onClick={(e) => { window.open(props.worker) }}
				className="learn-more">
				{props.text}
			</button>
		</>
	);
}

export default Button;
