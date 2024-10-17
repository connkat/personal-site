import { Carousel } from "react-responsive-carousel";
import { useMediaQuery } from "react-responsive";
import Fade from "react-reveal";

import "../styling/portfolio.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

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

function Portfolio() {
	const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1024px)" });

	function handleClick(index: number): void | undefined {
		if (index === 0) {
			window.open("http://coffee-fix.net");
		}

		if (index === 1) {
			window.open("http://theyellowdubmarine.com");
		}
		if (index === 2) {
			window.open("https://pixels-og.netlify.app/");
		}
		if (index === 3) {
			window.open("http://freezerburnwrestlingfederation.com");
		}
		if (index === 4) {
			window.open("https://cf-sprint-calc.netlify.app");
		}
	}

	return (
		<div className="Portfolio">
			{/* {isTabletOrMobile ? ( */}
			{/* <div className="wrapper_mobile">
					<div className="textBox_mobile">
						<Fade duration={5000}>
							<h1 className="new-text">About Kat</h1>
							<div className="new-text">
								<h2>What kind of person is Kat?</h2>
								<h3>
									<ul>
										<li>
											I am a creator, I am a goal-seeker, I am always trying to
											be challenged.
										</li>
										<li>
											I play multiple musical instruments and speak 3 languages.
										</li>
										<li>
											I have completed two university degrees and am currently
											working towards my third.
										</li>
										<li>
											I am a textile artist, seamstress, and leatherworker (for
											fun, as a treat).
										</li>
										<li>
											I enjoy Type 2 fun like: ski touring, marathon running,
											and back country camping.
										</li>
										<li>
											In my "spare" time, I run networking groups and
											participate in mentorship programs.
										</li>
									</ul>
									If that doesn't give you a better idea of the type of person I
									am, then feel free to do a deep dive in any of these places:
								</h3>
							</div>
						</Fade>
					</div>
				</div>
			) : ( */}
			<div className="wrapper_desktop">
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
										I am a textile artist, seamstress, and leatherworker (for
										fun, as a treat).
									</li>
									<li>
										I enjoy Type 2 fun like: ski touring, marathon running, and
										back country camping.
									</li>
									<li>
										In my "spare" time, I run networking groups and participate
										in mentorship programs.
									</li>
								</ul>
								If that doesn't give you a better idea of the type of person I
								am, then feel free to do a deep dive in any of these places:
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
						<h1>Fun projects</h1>
						<div>
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
								<a
									href="http://checkfront.com"
									target="_blank"
									rel="noreferrer"
								>
									Checkfront
								</a>
								, or my Freelance work, <br />
								but instead here are some of my fun personal projects:
							</h3>
						</div>
						<div className="carousel">
							<Carousel
								autoPlay={true}
								infiniteLoop={true}
								interval={2000}
								width="50%"
								showThumbs={false}
								showStatus={false}
								onClickItem={(index, item) => handleClick(index)}
							>
								<img src={coffee} alt="coffee" />
								<img src={dub} alt="dub" />
								<img src={pixels} alt="pixels" />
								<img src={fwf} alt="fwf" />
								<img src={calc} alt="calc" />
							</Carousel>
						</div>
					</Fade>
				</div>
			</div>
			{/* )} */}
		</div>
	);
}

export default Portfolio;
