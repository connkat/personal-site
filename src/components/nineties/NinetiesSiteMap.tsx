"use client";

import useMediaQuery from "../../hooks/useMediaQuery";

export default function NinetiesSiteMap() {
	const isMobile = useMediaQuery("(max-width: 800px)");

	return (
		<div id="site-map" className={`flex flex-row justify-evenly ${isMobile ? "text-[10px]" : ""}`}>
			<h2>
				<span className="text-red-500">|</span>
				<a href=".">Home</a>
				<span className="text-red-500">|</span>
				<a href="#about">About Me</a>
				<span className="text-red-500">|</span>
				<a href="#links">Links</a>
				<span className="text-red-500">|</span>
				<a href="#projects">Projects</a>
				<span className="text-red-500">|</span>
				<a href="#contact">Contact</a>
				<span className="text-red-500">|</span>
			</h2>
		</div>
	);
}
