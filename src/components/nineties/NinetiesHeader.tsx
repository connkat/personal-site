import React from "react";
import "../../styling/nineties/nineties-header.css";

import NinetiesSwitch from "../shared/NinetiesSwitch";

type NinetiesProps = {
	isNineties: boolean;
	handle90sToggle: (checked: boolean) => void;
};

function NinetiesHeader({ isNineties, handle90sToggle }: NinetiesProps) {
	return (
		<div id="NinetiesHeader">
			<div className="header">
				<NinetiesSwitch
					isNineties={isNineties}
					handle90sToggle={handle90sToggle}
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
