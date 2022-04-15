import React from "react";

import hamburger from "./../img/Hamburger.svg";
import contact from "./../img/contact.svg";
import work from "./../img/work2.svg";
import idea from "./../img/info3.svg";
import xMark from "./../img/x.svg";
import "./../css/styles.css";

import Contact from "./Contact";

import { Planet } from "react-planet";
import instagram from "./../img/social/instagram.svg";
import google from "./../img/social/google.svg";
import flickr from "./../img/social/flickr.svg";
import github from "./../img/social/github.svg";
import linkedin from "./../img/social/linkedin.svg";
import useIsInViewport from "use-is-in-viewport";

function Nav(props, contactState) {
	//have parent handle state?
	//need to change navState when any of the buttons are clicked
	//maybe set A to recieve props instead?

	const [isInViewport, targetRef] = useIsInViewport();
	const setContactVisible = props.contactState;
	const backBtn = props.backBtn;
	/*Contact Page* == TOP SECTION | Nav Bar == BOTTOM SECTION */
	return (
		<React.Fragment>
			<nav
				className={props.contactState ? "nav-menu hidden" : "nav-menu"}
			>
				<span
					onClick={props.handleReturn}
					className={
						props.navState
							? "nav-a nav-icon flex-ctr-col"
							: "nav-a-min nav-icon flex-ctr-col"
					}
				>
					<img
						src={props.navState ? xMark : hamburger}
						alt="hamburger"
					></img>
				</span>
				<div>
					<span
						onClick={props.handleWork}
						className={
							props.navState
								? "nav-b-min nav-icon flex-ctr-col"
								: "nav-b nav-icon flex-ctr-col"
						}
					>
						<img src={work} alt="work icon"></img>
					</span>
				</div>

				<span
					onClick={props.handleAbout}
					className={
						props.navState
							? "nav-c-min nav-icon flex-ctr-col"
							: "nav-c nav-icon flex-ctr-col"
					}
				>
					<img src={idea} alt="about icon"></img>
				</span>
				<span
					onClick={props.handleContact}
					className={
						props.navState
							? "nav-d-min nav-icon flex-ctr-col"
							: "nav-d nav-icon flex-ctr-col"
					}
				>
					<img src={contact} alt="contact icon"></img>
				</span>
				<div className="nav-text-container row-end">
					<p
						className={
							props.navState ? "navDescrip-min" : "navDescripA"
						}
					>
						Work
					</p>
					<p
						className={
							props.navState ? "navDescrip-min" : "navDescripB"
						}
					>
						Info
					</p>
					<p
						className={
							props.navState ? "navDescrip-min" : "navDescripC"
						}
					>
						Contact
					</p>
				</div>
			</nav>
		</React.Fragment>
	);
}

export default Nav;

/*


	const [isInViewport, targetRef] = useIsInViewport()
	const setContactVisible = props.contactState
	const backBtn=props.backBtn


		return(	
		<React.Fragment>


		</div>
		
	</React.Fragment>
		)
	
}

*/

//<div onClick={props.handleReturn}><img className='nav-icon-ctr' src={hamburger} alt='hamburger'></img></div>

/*patch notes:

refactoring to combine Contact component into Nav component for ease of animation
*/

/*
		<React.Fragment>
	
			{ props.contactState ? 

			<div className={setContactVisible ? 'contact-outer' : 'contact-outer-none'}>	
			<h1>Let's get in touch.</h1>
			<div   className='menu-container'></div>
			<div className='cir-menu'>
				<span ref={targetRef} className={props.contactState ? 'cir-a': 'cir-a-min'}>
					<a href='https://www.instagram.com/evan_scallan/'><p className='cir-a-text'></p><img className='contact-icon' src={instagram} alt='Instagram icon'></img></a>
				</span>
				<div onClick={props.handleReturn}><img className={props.contactState ? 'nav-icon-ctr' : 'nav-icon-ctr'} src={hamburger} alt='hamburger'></img></div>
				
				<span ref={targetRef} className={props.contactState ? 'cir-b' : 'cir-b-min'}>
					<a href='evanjscallan@gmail.com'><img className='contact-icon' src={google} alt='Email icon'></img></a>
				</span>
				<span ref={targetRef} className={props.contactState ? 'cir-c' : 'cir-c-min'}>
					<a href='https://www.linkedin.com/in/evan-scallan-a55831103/'><img className='contact-icon' src={linkedin} alt='LinkedIn icon'></img></a>
				</span>
				<span ref={targetRef}  className={props.contactState ? 'cir-d' : 'cir-d-min'}>
					<a href='https://github.com/evanjscallan'><img className='contact-icon' src={github} alt='Github icon'></img></a>
				</span>
				<span ref={targetRef}  className={props.contactState ? 'cir-e' : 'cir-e-min'}>
					<a href='https://www.flickr.com/people/142014826@N07/'><img className='contact-icon' src={flickr} alt='Email icon'></img></a>
				</span>
			</div>
		
		</div>

			:
			
			<nav className={props.contactState ? 'nav-menu hidden' : 'nav-menu'}>
				<span 
				onClick={props.handleReturn}
				className={props.navState ? 'nav-a nav-icon flex-ctr-col' : 'nav-a-min nav-icon flex-ctr-col'}>
					<img src={hamburger} alt='hamburger'></img>
				</span>
				<span  
				onClick={props.handleWork} 
				className={props.navState ? 'nav-b-min nav-icon flex-ctr-col' : 'nav-b nav-icon flex-ctr-col'}>
					<img src={work} alt='work icon'></img>
				</span>
				
				<span 
				onClick={props.handleAbout}
				className={props.navState ? 'nav-c-min nav-icon flex-ctr-col' : 'nav-c nav-icon flex-ctr-col'}>
					<img src={idea} alt='about icon'></img>
				</span>
				
				<span 
				onClick={props.handleContact}
				className={props.navState ? 'nav-d-min nav-icon flex-ctr-col' : 'nav-d nav-icon flex-ctr-col'}>
					<img src={contact} alt='contact icon'></img>
					
				</span>

			

			</nav>
			

		}
	</React.Fragment>*/
