import { CSSProperties } from "react";

import "../styling/nineties/nineties.css";

import {
	NinetiesHeader,
	NinetiesLinks,
	NinetiesProjects,
} from "../components/nineties";

type NinetiesProps = {
	isNineties: boolean;
	handle90sToggle: (checked: boolean) => void;
};

function Nineties({ isNineties, handle90sToggle }: NinetiesProps) {
	const smolStyle: CSSProperties = {
		fontSize: 8,
	};
	return (
		<div id="Nineties">
			<div className="content">
				<NinetiesHeader
					isNineties={isNineties}
					handle90sToggle={handle90sToggle}
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
				<NinetiesProjects />
			</div>
		</div>
	);
}

export default Nineties;
