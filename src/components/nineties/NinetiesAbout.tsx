import { CSSProperties } from "react";

export default function NinetiesAbout() {
	const smolStyle: CSSProperties = {
		fontSize: 8,
	};
	return (
		<div className="NinetiesAbout">
			<div id="about">
				<div className="about-me content">
					<div className="smol-joke">
						<p>I am passionate about web design!</p>
						<p style={smolStyle}>~*just kidding*~</p>
					</div>
				</div>
			</div>
		</div>
	);
}
