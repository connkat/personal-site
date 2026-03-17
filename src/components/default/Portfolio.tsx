"use client";

import { linkedIn, resume, github, medium } from "../../assets/index";

const projects = [
	{ name: "Coffee Fix", url: "http://coffee-fix.net", desc: "Coffee discovery app" },
	{ name: "The Yellow Dub Marine", url: "http://theyellowdubmarine.com", desc: "Interactive experience" },
	{ name: "Pixels", url: "https://pixels-og.netlify.app/", desc: "Generative pixel art" },
	{ name: "Freezer Burn Wrestling Federation", url: "http://freezerburnwrestlingfederation.com", desc: "Event site" },
	{ name: "Sprint Calculator", url: "https://cf-sprint-calc.netlify.app", desc: "Agile planning tool" },
];

export default function Portfolio() {
	return (
		<div id="work" className="px-[10vw] py-24">

			<div className="bg-white px-10 py-10 mb-24">
				<p className="text-xs tracking-widest uppercase text-gray-500 mb-6">Links</p>
				<div className="flex gap-8">
					<a href="https://github.com/connkat/Resume/blob/master/KConnolly.pdf" target="_blank" rel="noreferrer">
						<img src={resume.src} alt="resume" className="w-8 opacity-60 hover:opacity-100 transition-opacity" />
					</a>
					<a href="https://linkedin.com/in/connkat" target="_blank" rel="noreferrer">
						<img src={linkedIn.src} alt="LinkedIn" className="w-8 opacity-60 hover:opacity-100 transition-opacity" />
					</a>
					<a href="https://www.github.com/connkat" target="_blank" rel="noreferrer">
						<img src={github.src} alt="GitHub" className="w-8 opacity-60 hover:opacity-100 transition-opacity" />
					</a>
					<a href="https://connkat.medium.com/" target="_blank" rel="noreferrer">
						<img src={medium.src} alt="Medium" className="w-8 opacity-60 hover:opacity-100 transition-opacity" />
					</a>
				</div>
			</div>

			<div className="bg-white px-10 py-10">
				<p className="text-xs tracking-widest uppercase text-gray-500 mb-6">Work</p>
				<p className="text-gray-700 leading-relaxed mb-12 max-w-xl">
					Professionally: <a href="http://neofinancial.com" target="_blank" rel="noreferrer" className="underline hover:text-gray-900">Neo Financial</a>,{" "}
					<a href="http://lighthouselabs.ca" target="_blank" rel="noreferrer" className="underline hover:text-gray-900">Lighthouse Labs</a>,{" "}
					<a href="http://checkfront.com" target="_blank" rel="noreferrer" className="underline hover:text-gray-900">Checkfront</a>, and freelance.{" "}
					Here are some personal projects:
				</p>
				<div className="divide-y divide-gray-300/60">
					{projects.map(({ name, url, desc }) => (
						<a
							key={name}
							href={url}
							target="_blank"
							rel="noreferrer"
							className="flex items-baseline justify-between py-5 group"
						>
							<span className="text-gray-800 group-hover:text-gray-900 transition-colors text-lg font-thin">{name}</span>
							<span className="text-gray-400 text-sm tracking-wide group-hover:text-gray-600 transition-colors">{desc} ↗</span>
						</a>
					))}
				</div>
			</div>

		</div>
	);
}
