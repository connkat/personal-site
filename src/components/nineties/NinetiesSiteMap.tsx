"use client";

export default function NinetiesSiteMap() {
	return (
		<div id="site-map" className="flex justify-center py-2">
			<p className="whitespace-nowrap text-[clamp(20px,2.2vw,14px)]">
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
			</p>
		</div>
	);
}
