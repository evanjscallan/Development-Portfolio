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
				Evan Scallan is a developer who makes smooth-running, responsive applications.
			</h1>
			<img className="index-img" src={indexImg} alt=""/>
			<button 
			className="learn-more"
			onClick={this.handleClick}
			>VIEW MORE</button>
			 
		</div>	
	</div>
	</React.Fragment>
</div>

		);
	}
}
