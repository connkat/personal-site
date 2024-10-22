import "../styling/nineties/nineties.css";

import {
	NinetiesAbout,
	NinetiesHeader,
	NinetiesLinks,
	NinetiesProjects,
} from "../components/nineties";

type NinetiesProps = {
	isNineties: boolean;
	handle90sToggle: (checked: boolean) => void;
};

export default function Nineties({ isNineties, handle90sToggle }: NinetiesProps) {
	return (
		<div id="Nineties">
			<div className="content">
				<NinetiesHeader
					isNineties={isNineties}
					handle90sToggle={handle90sToggle}
				/>
				<h2>About Me:</h2>
				<NinetiesAbout />
				<h2>Links:</h2>
				<NinetiesLinks />

				<h2>Projects</h2>
				<NinetiesProjects />
			</div>
		</div>
	);
}
