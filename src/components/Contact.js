import React, { useState, useEffect } from 'react';

import instagram from './../img/social/instagram.svg'
import google from './../img/social/google.svg'
import flickr from './../img/social/flickr.svg'
import github from './../img/social/github.svg'
import linkedin from './../img/social/linkedin.svg'
import xMark from './../img/nav/x.svg'

let contactPhrases = [
  "Let's get in touch.", "Kontaktiere mich", "Let's have a conversation.",
  "Contáctame", "Let's communicate.", "Bana ulaşın",
  "Wanna Talk?", "让我们谈谈",
  "Vil du snakke med meg?",
  "Let's have coffee.", "Կապվեք ինձ հետ", "Hit me up.",
  "Επικοινώνησε μαζί μου", "Dost thou need to speak?", "Свяжитесь со мной",
  "저에게 연락", "Let's talk.", "ما سره اړیکه ونیسئ", "Comments/questions/queries?",
  "Liên hệ với tôi", "What's up?", "Зв'яжіться зі мною", "Contact me.",
  "चल बात करते है", "Send a carrier pidgeon",
  "Contactez moi", "צור איתי קשר",
  "Reach out.", "اتصل بي", "私に連絡して"]



const Contact = (props) => {
	const [targetRef] = ""
	const setContactVisible = props.contactState
	const backBtn = props.backBtn
	const [index, setIndex] = useState(0)
	const [phrase, setPhrase] = useState(contactPhrases[index])

	//timer effect
	useEffect(() => {
	  //index integer cycles through entire length of contactPhrases
	  const timer = setInterval(() => setIndex(i => (i + 1) % contactPhrases.length), 1000);
	  //cleanup after each iteration
	  return () => clearInterval(timer)
	}, [])
	 //uses the changing index number from the previous useEffect to cycle through the phrases
	useEffect(() => {
	  setPhrase(contactPhrases[index])
	}, [index])



		return(	
		<>
			<address className={setContactVisible ? 'contact-outer' : 'contact-outer-none'}>	
			<h1 className='contact-head-text'>{phrase}</h1>
		
			
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
		
	</>
		)
	
}

export default Contact;
