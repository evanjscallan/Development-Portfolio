import React from "react";
import Photo from "./../img/prflio.png";
import "./../css/styles.css";
import indexImg from "./../img/about_front_photo.jpeg";
import Contact from './Contact'
import Work from "./Work";
import About from './About';
import Button from './Button';
import Nav from './Nav';


export default class Index extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			workVisible: true,
			setWorkVisible: true,
			aboutVisible: true,
			setAboutVisible: true,
			setContactVisible: false,
			navState: false,

		};
		this.handleClick = this.handleClick.bind(this);
		this.handleAbout = this.handleAbout.bind(this);
		this.handleContact = this.handleContact.bind(this);
		this.handleReturn = this.handleReturn.bind(this);
	}

	handleClick(e) {
		this.setState((prevState) => ({
			setWorkVisible: !prevState.setWorkVisible,
			navState: !prevState.navState
		}));
	}

	handleAbout(event) {
		this.setState((prevState2)=> ({
			setAboutVisible: !prevState2.setAboutVisible,
			navState: !prevState2.navState
		}));
	}

	handleContact(event2) {
		console.log('clicked')
		this.setState((prevState3)=> ({
			setContactVisible: !prevState3.setContactVisible,
			navState: !prevState3.navState,
			navVisible: 'nav-d-min nav-icon flex-ctr-col',
			navHide: 'nav-d-min nav-icon flex-ctr-col hidden',

		}));
	}

	handleNav(event3) {
		console.log('nav clicked')
		this.setState((prevState4)=> ({
			navState: !prevState4.navState
		}))
	}

	handleReturn(event4){
		this.setState((prevState5)=>({
			workVisible: true,
			setWorkVisible: true,
			aboutVisible: true,
			setAboutVisible: true,
			setContactVisible: false,
			navState: !prevState5.navState,
		}))
	}



	
	render(props) {
		let handleWork = this.handleClick;
		let { setWorkVisible, setAboutVisible, setContactVisible, navState } = this.state

		console.log("NAVSTATE: " + navState)
		return (
			
<div>
<React.Fragment>
	<Contact
		contactState={setContactVisible}
		navState={this.state.navState}
		backBtn={this.handleContact.bind(this)}
	/>
	<About aboutState={setAboutVisible} backBtn={this.handleAbout.bind(this)} />
	<Nav 
			navState={this.state.navState}
			workState={setWorkVisible}
			aboutState={setAboutVisible}
			contactState={setContactVisible}
			handleNav={this.handleNav.bind(this)}
			handleWork={this.handleClick.bind(this)}
			handleAbout={this.handleAbout.bind(this)}
			handleContact={this.handleContact.bind(this)}
			handleReturn={this.handleReturn.bind(this)}
			backBtn={this.handleAbout.bind(this)} 

			/>
	<div className={setAboutVisible ? "index-outer" : "index-outer-none"}>
		<Work
			backBtn={this.handleClick.bind(this)}
			workState={setWorkVisible}
		/>
		
		<div className={setContactVisible ? "hidden" : "index-middle"}>
			<h1 className="font-primary title-text ">
				Evan Scallan is a developer who makes smooth-running, responsive
				web applications.
			</h1>
			<img className="index-img" src={indexImg} alt=""/>
			<Button text="VIEW MORE" click={this.handleClick.bind(this)} />
		</div>	
	</div>
	</React.Fragment>
</div>

		);
	}
}

/*<img className='profile-photo' src={Photo} alt='profile photo'></img>*/
/*<a className='view-more font-secondary'>View My Work</a>*/

/*		<nav className='top-box'>
					<img 
					src={Hamburger} 
					alt='Nav hamburger' 
					className='hamburger row align-left'
					onClick={this.props.handleNav}
					/>
				</nav>*/

/*<a className='view-more font-secondary'>View My Work</a>*/




///OLD NAV

/*					<span className={setContactVisible ? "hidden" : "index-top"}>
						<span className="nav-container-l">
							<button 
							className='noButtonStyle' 
							onClick={(e) => this.handleClick()}>WORK</button>
						</span>
						<span className="nav-container-r">
							<Nav navState={setNavVisible}/>
							<button 
							className='noButtonStyle'   
							onClick={(event) => this.handleAbout()}>ABOUT</button>
							<button className='contact-btn noButtonStyle' 
							onClick={(event2) => this.handleContact()}>CONTACT</button>
						</span>
					</span> */

/*
<Contact
		contactState={setContactVisible}
		navState={this.state.navState}
		backBtn={this.handleContact.bind(this)}
	/>
*/
//NEED TO FIGURE OUT FUNCTIONALITY FOR UNIVERSAL NAV BUTTON - REFACTOR
//Pass from child to parent? (best possible route)
//OR have navbar on a higher level than index (may lead to inefficiencies but could also save time)
//