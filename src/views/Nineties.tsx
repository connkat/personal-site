"use client";

import useMediaQuery from "src/hooks/useMediaQuery";
import {
	NinetiesAbout,
	NinetiesHeader,
	NinetiesLinks,
	NinetiesProjects,
	NinetiesSiteMap,
} from "../components/nineties";

type NinetiesProps = {
	isNineties: boolean;
	handle90sToggle: (checked: boolean) => void;
};

export default function Nineties({ isNineties, handle90sToggle }: NinetiesProps) {
	const isMobile = useMediaQuery("(max-width: 800px)");

	return (
		<>
			<div className="fixed inset-0 -z-10 bg-[url('https://i.imgur.com/SHZe50s.gif')] bg-repeat" />
			<div
				id="Nineties"
				className="min-h-screen text-yellow-300 flex flex-col justify-between [&_a:hover]:bg-white"
				style={{ fontFamily: '"Comic Sans MS", sans-serif', color: "yellow" }}
			>
				<div className={isMobile ? "p-0" : "px-[5vh]"}>
					<NinetiesHeader isNineties={isNineties} handle90sToggle={handle90sToggle} />
					<h2>About Me:</h2>
					<NinetiesAbout />
					<NinetiesLinks />
					<h2>Projects</h2>
					<NinetiesProjects />
					<NinetiesSiteMap />
				</div>
			</div>
		</>
	);
}
