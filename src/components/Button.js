import React from 'react'
import "./../css/styles.css";


const Button = (props,e) => {
	const proper = props.siteLink2

		function btnClick(props){
			//TEST LINK - NEED TO PASS PROPS
			window.open('https://orcasound.net')
			console.log(props.siteLink2)
}


	return (
		
		<button
		
		onClick={(e) => btnClick(e)}
		className="learn-more">
		{props.text}
		</button>
	
		)
}

export default Button