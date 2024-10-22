import "../../styling/nineties/nineties-header.css";

import useMediaQuery from "src/hooks/useMediaQuery";

import NinetiesSwitch from "../shared/NinetiesSwitch";

type NinetiesProps = {
	isNineties: boolean;
	handle90sToggle: (checked: boolean) => void;
};

function NinetiesHeader({ isNineties, handle90sToggle }: NinetiesProps) {
	const isMobileOrTable = useMediaQuery("(max-width: 800px)");

	return (
		<div id="NinetiesHeader">
			<div className={isMobileOrTable ? "header_mobile" : "header_desktop"}>
				<div className="switch">
					<NinetiesSwitch
						isNineties={isNineties}
						handle90sToggle={handle90sToggle}
					/>
					<p>Go back to 2024</p>
				</div>
				<h1 className="blink">Welcome to my website!</h1>
				{isMobileOrTable ? (
					<span />
				) : (
					<img src="https://i.imgur.com/Q	kBkUkC.gif" alt="ie-logo" />
				)}
			</div>
			<img
				src="https://i.imgur.com/i6hvJjx.gif"
				alt="rainbow-divider"
				className="rainbow-divider"
			/>
			<div id="nav" className={isMobileOrTable ? "nav_mobile" : "nav_desktop"}>
				<h2>
					<a href=".">Home</a> <span className="line">|</span>
					<a href="#about">About Me</a> <span className="line">|</span>
					<a href="#links">Links</a> <span className="line">|</span>
					<a href="#projects">Projects</a> <span className="line">|</span>
				</h2>
			</div>
		</div>
	);
}

export default NinetiesHeader;
