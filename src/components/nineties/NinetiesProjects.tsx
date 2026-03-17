"use client";

import "98.css";
import { coffee, dub, pixels, fwf, calc, nate2 } from "../../assets/index";

const projects = [
	{ name: "Coffee Fix", url: "http://coffee-fix.net", image: coffee },
	{ name: "Yellow Dubmarine", url: "http://theyellowdubmarine.com", image: dub },
	{ name: "Pixels & Pints", url: "https://pixels-og.netlify.app/", image: pixels },
	{ name: "FWF", url: "http://freezerburnwrestlingfederation.com", image: fwf },
	{ name: "Sprint Calculator", url: "https://cf-sprint-calc.netlify.app", image: calc },
	{ name: "Nathan Iles", url: "https://nathaniles.com/", image: nate2 },
];

export default function NinetiesProjects() {
	return (
		<div id="projects" className="px-[5vh] text-base">
			<p>
				I could go on about my professional experience with{" "}
				<a href="http://metalab.com" target="_blank" rel="noreferrer">
					Metalab
				</a>
				,{" "}
				<a href="http://neofinancial.com" target="_blank" rel="noreferrer">
					Neo Financial
				</a>
				,{" "}
				<a href="http://lighthouselabs.ca" target="_blank" rel="noreferrer">
					Lighthouse Labs
				</a>
				,{" "}
				<a href="http://checkfront.com" target="_blank" rel="noreferrer">
					Checkfront
				</a>
				, or my Freelance work, but that is what a{" "}
				<a href="/KConnolly.pdf" download>
					resume
				</a>{" "}
				is for.
			</p>
			<p>Instead here are some of my fun personal projects:</p>
			<div
				className="flex md:grid overflow-x-auto md:overflow-x-visible snap-x snap-mandatory md:snap-none gap-4 mt-3"
				style={{ gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))" }}
			>
				{projects.map(({ name, url, image }) => (
					<div key={name} className="window snap-start shrink-0 md:shrink w-[70vw] md:w-full">
						<div className="title-bar">
							<div className="title-bar-text">{name}</div>
							<div className="title-bar-controls">
								<button aria-label="Minimize" />
								<button aria-label="Maximize" />
								<button aria-label="Close" />
							</div>
						</div>
						<div className="window-body" style={{ padding: "4px" }}>
							<a href={url} target="_blank" rel="noreferrer">
								<img
									src={image.src}
									alt={name}
									style={{ width: "100%", height: "250px", objectFit: "cover", display: "block" }}
								/>
							</a>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
