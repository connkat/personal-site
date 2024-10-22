import { CSSProperties } from "react";

import "../../styling/nineties/nineties-about.css";

import useMediaQuery from "src/hooks/useMediaQuery";

export default function NinetiesAbout() {
	const isMobileOrTable = useMediaQuery("(max-width: 800px)");

	const smolStyle: CSSProperties = {
		fontSize: 8,
		paddingTop: "1vh",
	};
	return (
		<div
			className={
				isMobileOrTable ? "NinetiesAbout_mobile" : "NinetiesAbout_desktop"
			}
		>
			<div id="about">
				<div className="about-me content">
					<div className="smol-joke">
						<p>I am passionate about web design!</p>
						<p style={smolStyle}>~*just kidding*~</p>
					</div>
					<div className="smol-joke">
						<p>
							While I am not a designer, I am a skilled fullstack* developer,
							with substantial experience in both back and front end
							technologies.
						</p>
						<p style={smolStyle}>*you can debate if fullstack devs are real</p>
					</div>
				</div>
			</div>
		</div>
	);
}
