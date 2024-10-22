import Fade from "react-reveal";

import ProjectCarousel from "../shared/ProjectCarousel";

import "../../styling/default/portfolio.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import useMediaQuery from "src/hooks/useMediaQuery";

import { linkedIn, resume, github, medium } from "../../assets/index";

export default function Portfolio() {
	const isMobileOrTablet = useMediaQuery("(max-width: 800px)");

	return (
		<div className="Portfolio">
			<div className={isMobileOrTablet ? "wrapper_mobile" : "wrapper_desktop"}>
				<div
					className={isMobileOrTablet ? "textBox_mobile" : "textBox_desktop"}
				>
					<Fade duration={5000}>
						<h1>About Kat</h1>
						<div>
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
						<div
							className={
								isMobileOrTablet ? "icon-links_mobile" : "icon-links_desktop"
							}
						>
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
				<div
					className={isMobileOrTablet ? "fun-work_mobile" : "fun-work_desktop"}
				>
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
								, or my Freelance work.{" "}
							</h3>
							<h3>Instead here are some of my fun personal projects:</h3>
						</div>
						<div className="carousel">
							<ProjectCarousel />
						</div>
					</Fade>
				</div>
			</div>
		</div>
	);
}
