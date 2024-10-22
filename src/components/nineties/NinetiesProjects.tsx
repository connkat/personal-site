import "../../styling/nineties/nineties-projects.css";

import ProjectCarousel from "../shared/ProjectCarousel";

export default function NinetiesProjects() {
	return (
		<div id="projects">
			<div className="nineties-projects content">
				<h3>
					I could go on about my professional experience with{" "}
					<a href="http://neofinancial.com" target="_blank" rel="noreferrer">
						Neo Financial
					</a>
					,{" "}
					<a href="http://lighthouselabs.ca" target="_blank" rel="noreferrer">
						Lighthouse Labs
					</a>
					,{" "}
					<a href="http://checkfront.com" target="_blank" rel="noreferrer">
						Checkfront
					</a>
					, or my Freelance work, but that is what a{" "}
					<a href="https://github.com/connkat/Resume/blob/master/KConnolly.pdf">
						resume
					</a>{" "}
					is for.
				</h3>
				<h3>Instead here are some of my fun personal projects:</h3>
				<div className="carousel">
					<ProjectCarousel />
				</div>
			</div>
		</div>
	);
}
