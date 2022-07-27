import React from "react";

import hamburger from "./../img/nav/Hamburger.svg";
import contact from "./../img/nav/contact.svg";
import work from "./../img/nav/work2.svg";
import idea from "./../img/nav/info3.svg";
import xMark from "./../img/nav/x.svg";
import "./../css/styles.css";


const Nav = (props, contactState) => {
	/*Contact Page* == TOP SECTION | Nav Bar == BOTTOM SECTION */
	return (
		<>
			<nav
				className={props.contactState ? "nav-menu hidden" : "nav-menu"}>
				<span
					onClick={props.handleReturn}
					className={props.navState ? "nav-a nav-icon flex-ctr-col": "nav-a-min nav-icon flex-ctr-col"}>
					<img
						src={props.navState ? xMark : hamburger}
						alt="hamburger">		
					</img>
				</span>
				<div>
					<span
						onClick={props.handleWork}
						className={props.navState ? "nav-b-min nav-icon flex-ctr-col" : "nav-b nav-icon flex-ctr-col"}>
						<img src={work} alt="work icon"></img>
					</span>
				</div>
				<span
					onClick={props.handleAbout}
					className={props.navState? "nav-c-min nav-icon flex-ctr-col": "nav-c nav-icon flex-ctr-col"}>
					<img src={idea} alt="about icon"></img>
				</span>
				<span
					onClick={props.handleContact}
					className={props.navState ? "nav-d-min nav-icon flex-ctr-col" : "nav-d nav-icon flex-ctr-col"}>
					<img src={contact} alt="contact icon"></img>
				</span>
				<div className="nav-text-container row-end">
					<p className={props.navState ? "navDescrip-min" : "navDescripA"}>
						Work
					</p>
					<p className={props.navState ? "navDescrip-min" : "navDescripB"}>
						Info
					</p>
					<p className={props.navState ? "navDescrip-min" : "navDescripC"}>
						Contact
					</p>
				</div>
			</nav>
		</>
	);
}

export default Nav;

