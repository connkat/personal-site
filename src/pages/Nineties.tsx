import { CSSProperties } from "react";

import "../styling/nineties/nineties.css";

import { NinetiesHeader, NinetiesLinks } from "../components/nineties";

type NinetiesProps = {
	isNineties: boolean;
	handle90sToggle: (checked: boolean) => void;
};

function Nineties(props: NinetiesProps) {
	const smolStyle: CSSProperties = {
		fontSize: 8,
	};
	return (
		<div id="Nineties">
			<div className="content">
				<NinetiesHeader
					isNineties={props.isNineties}
					handle90sToggle={props.handle90sToggle}
				/>
				<h2>About Me:</h2>
				<div id="about">
					<div className="about-me content">
						<div className="smol-joke">
							<p>I am passionate about web design!</p>
							<p style={smolStyle}>~*just kidding*~</p>
						</div>
					</div>
				</div>
				<h2>Links:</h2>
				<NinetiesLinks />

				<h2>Projects</h2>
				<div id="projects">
					<div className="project content">
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
							, or my Freelance work, but that is what a{" "}
							<a href="https://github.com/connkat/Resume/blob/master/KConnolly.pdf">
								resume
							</a>
							is for.
						</h3>
						<h3>Instead here are some of my fun personal projects:</h3>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Nineties;
