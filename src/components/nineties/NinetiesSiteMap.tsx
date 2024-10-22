import React from "react";
import useMediaQuery from "../../hooks/useMediaQuery";

import "../../styling/nineties/nineties-site-map.css";

export default function NinetiesSiteMap() {
	const isMobileOrTable = useMediaQuery("(max-width: 800px)");

	return (
		<div
			id="site-map"
			className={isMobileOrTable ? "site-map_mobile" : "site-map_desktop"}
		>
			<h2>
				<span className="line">|</span>
				<a href=".">Home</a>
				<span className="line">|</span>
				<a href="#about">About Me</a>
				<span className="line">|</span>
				<a href="#links">Links</a>
				<span className="line">|</span>
				<a href="#projects">Projects</a>
				<span className="line">|</span>
				<a href="#contact">Contact</a>
				<span className="line">|</span>
			</h2>
		</div>
	);
}
