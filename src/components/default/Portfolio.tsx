"use client";

import ProjectCarousel from "../shared/ProjectCarousel";
import useMediaQuery from "src/hooks/useMediaQuery";
import { linkedIn, resume, github, medium } from "../../assets/index";

export default function Portfolio() {
	const isMobile = useMediaQuery("(max-width: 800px)");

	return (
		<div>
			<div className={isMobile ? "" : "h-[75vh] flex flex-row justify-between p-[5%]"}>
				<div className={isMobile ? "p-[5%]" : "w-1/2"}>
					<h1>About Kat</h1>
					<div>
						<h2>What kind of person is Kat?</h2>
						<h3 className="font-thin">
							<ul>
								<li>I am a creator, I am a goal-seeker, I am always trying to be challenged.</li>
								<li>I play multiple musical instruments and speak 3 languages.</li>
								<li>I have completed two university degrees and am currently working towards my third.</li>
								<li>I am a textile artist, seamstress, and leatherworker (for fun, as a treat).</li>
								<li>I enjoy Type 2 fun like: ski touring, marathon running, and back country camping.</li>
								<li>In my "spare" time, I run networking groups and participate in mentorship programs.</li>
							</ul>
							If that doesn't give you a better idea of the type of person I am, then feel free to do a deep dive in any of these places:
						</h3>
					</div>
					<div className={isMobile ? "flex justify-between px-[20%] pb-[5%]" : "flex justify-between px-[20%]"}>
						<a href="https://github.com/connkat/Resume/blob/master/KConnolly.pdf" target="_blank" rel="noreferrer">
							<img src={resume.src} alt="resume" className="max-w-12.5" />
						</a>
						<a href="https://linkedin.com/in/connkat" target="_blank" rel="noreferrer">
							<img src={linkedIn.src} alt="linkedIn" className="max-w-12.5" />
						</a>
						<a href="https://www.github.com/connkat" target="_blank" rel="noreferrer">
							<img src={github.src} alt="github" className="max-w-12.5" />
						</a>
						<a href="https://connkat.medium.com/" target="_blank" rel="noreferrer">
							<img src={medium.src} alt="Medium" className="max-w-12.5" />
						</a>
					</div>
				</div>
				<div className={isMobile ? "bg-white p-[5%]" : "w-[40%] text-right"}>
					<h1>Fun projects</h1>
					<div>
						<h3 className="font-thin">
							I could go on about my professional experience with: <br />
							<a href="http://neofinancial.com" target="_blank" rel="noreferrer">Neo Financial</a>,{" "}
							<a href="http://lighthouselabs.ca" target="_blank" rel="noreferrer">Lighthouse Labs</a>,{" "}
							<a href="http://checkfront.com" target="_blank" rel="noreferrer">Checkfront</a>, or my Freelance work.{" "}
						</h3>
						<h3 className="font-thin">Instead here are some of my fun personal projects:</h3>
					</div>
					<div>
						<ProjectCarousel />
					</div>
				</div>
			</div>
		</div>
	);
}
