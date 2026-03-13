import ProjectCarousel from "../shared/ProjectCarousel";

export default function NinetiesProjects() {
	return (
		<div id="projects" className="px-[5vh]">
			<p>
				I could go on about my professional experience with{" "}
				<a href="http://neofinancial.com" target="_blank" rel="noreferrer">Neo Financial</a>,{" "}
				<a href="http://lighthouselabs.ca" target="_blank" rel="noreferrer">Lighthouse Labs</a>,{" "}
				<a href="http://checkfront.com" target="_blank" rel="noreferrer">Checkfront</a>
				, or my Freelance work, but that is what a{" "}
				<a target="_blank" rel="noreferrer" href="https://github.com/connkat/Resume/blob/master/KConnolly.pdf">resume</a>{" "}
				is for.
			</p>
			<p>Instead here are some of my fun personal projects:</p>
			<div className="flex justify-center mx-auto pb-[2vh]">
				<ProjectCarousel />
			</div>
		</div>
	);
}
