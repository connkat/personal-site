"use client";

import useMediaQuery from "../../hooks/useMediaQuery";
import NinetiesSwitch from "../shared/NinetiesSwitch";

type NinetiesProps = {
	isNineties: boolean;
	handle90sToggle: (checked: boolean) => void;
};

function NinetiesHeader({ isNineties, handle90sToggle }: NinetiesProps) {
	const isMobile = useMediaQuery("(max-width: 800px)");

	return (
		<div id="NinetiesHeader">
			<div className={isMobile
				? "flex flex-row justify-between items-center py-[2vh] px-[2vh]"
				: "flex flex-row justify-between items-center py-[4vh]"
			}>
				<div className={isMobile ? "flex flex-col pt-[2vh]" : ""}>
					<NinetiesSwitch isNineties={isNineties} handle90sToggle={handle90sToggle} />
					<p>Go back to today</p>
				</div>
				<h1 className={`blink text-center leading-none ${isMobile ? "text-base" : ""}`}>
					Welcome to my website!
				</h1>
				{isMobile ? <span /> : <img src="https://i.imgur.com/QkBkUkC.gif" alt="ie-logo" />}
			</div>
			<img src="https://i.imgur.com/i6hvJjx.gif" alt="rainbow-divider" className="w-full" />
		</div>
	);
}

export default NinetiesHeader;
