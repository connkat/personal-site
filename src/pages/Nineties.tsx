import { CSSProperties } from "react";

import "../styling/nineties.css";

import { NinetiesSwitch } from "src/components";

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
				<div className="header">
					<NinetiesSwitch
						isNineties={props.isNineties}
						handle90sToggle={props.handle90sToggle}
					/>
					<h1 className="tab blink">Welcome to my website!</h1>
					<img src="https://i.imgur.com/Q	kBkUkC.gif" alt="ie-logo" />
				</div>
				<img
					src="https://i.imgur.com/i6hvJjx.gif"
					alt="rainbow-divider"
					className="rainbow-divider"
				/>
				<div id="nav">
					<h4>
						<a href=".">Home</a> <span className="line">|</span>
						<a href="#about">About Me</a> <span className="line">|</span>
						<a href="#links">Links</a> <span className="line">|</span>
						<a href="#projects">Projects</a> <span className="line">|</span>
					</h4>
				</div>
				<div id="about">
					<h2>About Me:</h2>
					<div className="about-me content">
						<div className="smol-joke">
							<p>I am passionate about web design!</p>
							<p style={smolStyle}>~*just kidding*~</p>
						</div>
					</div>
				</div>
				<div id="links">
					<h2>Links:</h2>
					<div className="image-links content">
						<div className="single-link">
							<a
								href="https://github.com/connkat/Resume/blob/master/KConnolly.pdf"
								target="_blank"
								rel="noreferrer"
							>
								<img
									src="https://win98icons.alexmeub.com/icons/png/write_wordpad-1.png"
									alt="resume"
									className="icon-tiny"
								/>
								<p>Resume</p>
							</a>
						</div>
						<div className="single-link">
							<a
								href="https://linkedin.com/in/connkat"
								target="_blank"
								rel="noreferrer"
							>
								<img
									src={
										"https://win98icons.alexmeub.com/icons/png/world_phonereceiver.png"
									}
									alt="linkedIn"
									className="icon-tiny-linkedin"
								/>
								<p>LinkedIn</p>
							</a>
						</div>
						<div className="single-link">
							<a
								href="https://www.github.com/connkat"
								target="_blank"
								rel="noreferrer"
							>
								<img
									src={
										"https://win98icons.alexmeub.com/icons/png/computer_explorer-4.png"
									}
									alt="github"
									className="icon-tiny"
								/>
								<p>Github</p>
							</a>
						</div>
						<div className="single-link">
							<a
								href="https://connkat.medium.com/"
								target="_blank"
								rel="noreferrer"
							>
								<img
									src={
										"https://win98icons.alexmeub.com/icons/png/printer-0.png"
									}
									alt="Medium"
									className="icon-tiny"
								/>
								<p>Medium</p>
							</a>
						</div>
					</div>
				</div>
				<div id="projects">
					<h2>Projects</h2>
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
