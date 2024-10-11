import Carousel from "react-multi-carousel";

import "react-multi-carousel/lib/styles.css";
import "../styling/portfolio.css";

import {
	calc,
	pixels,
	coffee,
	fwf,
	dub,
	linkedIn,
	resume,
	github,
	medium,
} from "../assets/index";

const Fade = require("react-reveal/Fade");

function Portfolio() {
	const responsive = {
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 2,
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 2,
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
		},
	};
	return (
		<div className="Portfolio">
			<div className="textBox">
				<Fade duration={5000}>
					<h1 className="new-text">About Kat</h1>
					<div className="new-text">
						<h2>What kind of person is Kat?</h2>
						<h3>
							<ul>
								<li>
									I am a creator, I am a goal-seeker, I am always trying to be
									challenged.
								</li>
								<li>
									I play multiple musical instruments and speak 3 languages.
								</li>
								<li>
									I have completed two university degrees and am currently
									working towards my third.
								</li>
								<li>
									I am a textile artist, seamstress, and leatherworker (for fun,
									as a treat).
								</li>
								<li>
									I enjoy Type 2 fun like: ski touring, marathon running, and
									back country camping.
								</li>
								<li>
									In my "spare" time, I run networking groups and participate in
									mentorship programs.
								</li>
							</ul>
							If that doesn't give you a better idea of the type of person I am,
							then feel free to do a deep dive in any of these places:
						</h3>
					</div>
				</Fade>
				<Fade duration={5000}>
					<div className="icon-links">
						<a
							href="https://github.com/connkat/Resume/blob/master/KConnolly.pdf"
							target="_blank"
							rel="noreferrer"
						>
							<img src={resume} alt="resume" className="icon-tiny" />
						</a>
						<a
							href="https://linkedin.com/in/connkat"
							target="_blank"
							rel="noreferrer"
						>
							<img
								src={linkedIn}
								alt="linkedIn"
								className="icon-tiny-linkedin"
							/>
						</a>
						<a
							href="https://www.github.com/connkat"
							target="_blank"
							rel="noreferrer"
						>
							<img src={github} alt="github" className="icon-tiny" />
						</a>
						<a
							href="https://connkat.medium.com/"
							target="_blank"
							rel="noreferrer"
						>
							<img src={medium} alt="Medium" className="icon-tiny" />
						</a>
					</div>
				</Fade>
			</div>
			<div className="fun-work">
				<Fade duration={5000}>
					<h1 className="new-text">Fun projects</h1>
					<div className="new-text">
						<h3>
							I could go on about my professional experience with: <br />
							<a
								href="http://neofinancial.com"
								target="_blank"
								rel="noreferrer"
							>
								Neo Financial
							</a>
							,{" "}
							<a
								href="http://lighthouselabs.ca"
								target="_blank"
								rel="noreferrer"
							>
								Lighthouse Labs
							</a>
							,{" "}
							<a href="http://checkfront.com" target="_blank" rel="noreferrer">
								Checkfront
							</a>
							, or my Freelance work, <br />
							but instead here are some of my fun personal projects:
						</h3>
					</div>
					<div className="carousel">
						<Carousel
							swipeable={false}
							draggable={false}
							showDots={true}
							responsive={responsive}
							ssr={true}
							infinite={true}
							autoPlay={true}
							autoPlaySpeed={3000}
							keyBoardControl={true}
							customTransition="all .5"
							transitionDuration={500}
							containerClass="carousel-container"
							removeArrowOnDeviceType={["tablet", "mobile"]}
							dotListClass="custom-dot-list-style"
							itemClass="carousel-item-padding-40-px"
						>
							<a href="http://coffee-fix.net" target="_blank" rel="noreferrer">
								<img src={coffee} alt="coffee" />
							</a>
							<a
								href="http://theyellowdubmarine.com"
								target="_blank"
								rel="noreferrer"
							>
								<img src={dub} alt="dub" />
							</a>
							<a
								href="https://pixels-og.netlify.app/"
								target="_blank"
								rel="noreferrer"
							>
								<img src={pixels} alt="pixels" />
							</a>
							<a
								href="http://freezerburnwrestlingfederation.com"
								target="_blank"
								rel="noreferrer"
							>
								<img src={fwf} alt="fwf" />
							</a>
							<a
								href="https://cf-sprint-calc.netlify.app/"
								target="_blank"
								rel="noreferrer"
							>
								<img src={calc} alt="calc" />
							</a>
						</Carousel>
					</div>
				</Fade>
			</div>
		</div>
	);
}

export default Portfolio;
