import "../../styling/nineties/nineties-links.css";

export default function NinetiesLinks() {
	return (
		<div id="links">
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
							src={"https://win98icons.alexmeub.com/icons/png/printer-0.png"}
							alt="Medium"
							className="icon-tiny"
						/>
						<p>Medium</p>
					</a>
				</div>
			</div>
		</div>
	);
}
