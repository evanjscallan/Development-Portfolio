import React from 'react';
import { Planet } from 'react-planet';
import instagram from './../img/social/instagram.svg'
import google from './../img/social/google.svg'
import flickr from './../img/social/flickr.svg'
import github from './../img/social/github.svg'
import linkedin from './../img/social/linkedin.svg'
import useIsInViewport from 'use-is-in-viewport'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import hamburger from './../img/nav/Hamburger.svg'
import xMark from './../img/nav/x.svg'


import Nav from './Nav.js'

export default function Contact(props, contactState){
	const [isInViewport, targetRef] = useIsInViewport()
	const setContactVisible = props.contactState
	const backBtn=props.backBtn


		return(	
		<React.Fragment>
			<address className={setContactVisible ? 'contact-outer' : 'contact-outer-none'}>	
			<h1 className='contact-head-text'>Let's get in touch.</h1>
			<div   className='menu-container'></div>
			<div className='cir-menu'>
				<span ref={targetRef} className={props.contactState ? 'cir-a': 'cir-a-min'}>
					<a href='https://www.instagram.com/evan_scallan/'><p className='cir-a-text'></p><img className='contact-icon' src={instagram} alt='Instagram icon'></img></a>
				</span>
				<div onClick={backBtn}><img className='nav-icon-ctr' src={xMark} alt='hamburger'></img></div>
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
		</address>
		
	</React.Fragment>
		)
	
}





/*USE THIS
       					<div>
			        		<a href='https://www.instagram.com/evan_scallan/'><img className='contact-icon' src={instagram} alt='Instagram icon'></img></a>
			        	</div>
			        	<div>
			        		
			        	</div>
			        	<div>
			        		
			        	</div>
			        	<div>
			        		
			        	</div>
			            <div>
			            	<a href='https://www.flickr.com/people/142014826@N07/'><img className='contact-icon' src={flickr} alt='Email icon'></img></a>
			            </div>*/