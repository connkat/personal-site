import "../styling/nineties/nineties.css";

import {
	NinetiesAbout,
	NinetiesHeader,
	NinetiesLinks,
	NinetiesProjects,
	NinetiesContact,
} from "../components/nineties";

import useMediaQuery from "src/hooks/useMediaQuery";

type NinetiesProps = {
	isNineties: boolean;
	handle90sToggle: (checked: boolean) => void;
};

export default function Nineties({
	isNineties,
	handle90sToggle,
}: NinetiesProps) {
	const isMobileOrTable = useMediaQuery("(max-width: 800px)");

	return (
		<div id="Nineties">
			<div className={isMobileOrTable ? "content_mobile" : "content_desktop"}>
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
				<h2>Contact</h2>
				<NinetiesContact />
			</div>
		</div>
	);
}
