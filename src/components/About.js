import React from "react";


import "./../css/styles.css";

import { GiMagicBroom } from "react-icons/gi";
import { MdPhoneInTalk, MdDashboardCustomize } from "react-icons/md";
import { BsChevronExpand } from "react-icons/bs";
import { IconContext } from "react-icons";


import aboutGif from "./../img/profile/about_blue.gif"

import Draggable from "react-draggable"; // Both at the same time

const skills = [
	{ skillAtt: "Javascript", skillLvl: "80%" },
	{ skillAtt: "Python", skillLvl: "70%" },
	{ skillAtt: "React", skillLvl: "80%" },
	{ skillAtt: "Javascript", skillLvl: "75%" },
	{ skillAtt: "API Integration", skillLvl: "50%" },
	{ skillAtt: "SASS/CSS", skillLvl: "80%" },
	{ skillAtt: "Flask", skillLvl: "55%" },
	{ skillAtt: "SQLite", skillLvl: "65%" },
];

export default class About extends React.Component {
	constructor(props, skills) {
		super(props);
	}
	render(props) {
		const setAboutVisible = this.props.aboutState;
		return (
			<div className="about-outer">
				<div className="about-middle">
					<img src={aboutGif} className='about-img'></img>
					<div className=" flex-col-ctr about-p prim">
						<p>
							I'm a full-stack developer, musician, avid hiker,
							and photographer based out of Dallas, TX. My goal is
							to cultivate seamless applications through practical
							and creative coding. I also enjoy long walks on
							beaches, cats, and getting frustrated on Stack
							Overload.
						</p>

						<span className="ctr-row">
							<div>
								<div className="intang-icon">
									<GiMagicBroom size="5em" />
									<p className="intangibles">
										Clean codebase
									</p>
								</div>
							</div>
							<div>
								<div className="intang-icon">
									<MdDashboardCustomize size="5em" />
									<p className="intangibles">
										Modular architecture
									</p>
								</div>
							</div>
							<div>
								<div className="intang-icon">
									<MdPhoneInTalk size="5em" />
									<p className="intangibles">
										Efficient relay
									</p>
								</div>
							</div>
						</span>
					</div>
				</div>
				<div className={ setAboutVisible ? "about-bottom-hidden" : "about-bottom" }>

					<Draggable
						axis="y"
						handle=".handle"
						defaultPosition={{ x: 0, y: 0 }}
						position={null}
						scale={1}
						onStart={this.handleStart}
						onDrag={this.handleDrag}
						onStop={this.handleStop}>

						<div className="handle">
							<div className="skills-page">
								<IconContext.Provider
									value={{
										color: "white",
										size: "2em",
										className: "handle-button"}}>
									<BsChevronExpand />
								</IconContext.Provider>
								<h2 className="skills-text prim">SKILLS</h2>
								<ul className="skills-list">
									<span className="list-ind">
										<p>Javascript</p>
										<div className="skill-bar-outer">
											<div
												style={{ width: skills[0].skillLvl }}
												className="skill-bar-inner">
												<p>{skills[0].skillLvl}</p>
											</div>
										</div>
									</span>
									<span className="list-ind">
										<p>Python</p>
										<div className="skill-bar-outer">
											<div
												style={{ width: skills[1].skillLvl }}
												className="skill-bar-inner">
												<p>{skills[1].skillLvl}</p>
											</div>
										</div>
									</span>
									<span className="list-ind">
										<p>React</p>
										<div className="skill-bar-outer">
											<div
												style={{ width: skills[2].skillLvl }}
												className="skill-bar-inner">
												<p>{skills[2].skillLvl}</p>
											</div>
										</div>
									</span>
									<span className="list-ind">
										<p>API Integration</p>
										<div className="skill-bar-outer">
											<div
												style={{ width: skills[3].skillLvl }}
												className="skill-bar-inner">
												<p>{skills[3].skillLvl}</p>
											</div>
										</div>
									</span>
									<span className="list-ind">
										<p>SASS/CSS</p>
										<div className="skill-bar-outer">
											<div
												style={{ width: skills[4].skillLvl }}
												className="skill-bar-inner">
												<p>{skills[4].skillLvl}</p>
											</div>
										</div>
									</span>
									<span className="list-ind">
										<p>Flask</p>
										<div className="skill-bar-outer">
											<div
												style={{ width: skills[5].skillLvl }}
												className="skill-bar-inner">
												<p>{skills[5].skillLvl}</p>
											</div>
										</div>
									</span>
									<span className="list-ind">
										<p>SQLite</p>
										<div className="skill-bar-outer">
											<div
												style={{ width: skills[6].skillLvl }}
												className="skill-bar-inner">
												<p>{skills[6].skillLvl}</p>
											</div>
										</div>
									</span>
								</ul>
							</div>
						</div>

					</Draggable>
				</div>
			</div>
		);
	}
}


/*
<video className='about-img'  muted="muted"  defaultMuted playsinline autoplay="autoplay" loop="loop" oncontextmenu="return false;"  preload="auto"  id="myVideo">
						<source  src={aboutVid} type='video/mp4'/>
					</video>*/
