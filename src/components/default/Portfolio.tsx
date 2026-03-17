"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { resume, coffee, dub, pixels, fwf, calc, nate, ycpr } from "../../assets/index";

const cells = [
	{
		type: "project",
		name: "Coffee Fix",
		url: "http://coffee-fix.net",
		span: "col-span-2",
		image: coffee,
		imagePos: "object-center",
	},
	{ type: "empty", span: "col-span-1" },
	{ type: "empty", span: "col-span-1" },
	{
		type: "project",
		name: "YCPR",
		url: "https://ycpr-alt.netlify.app/",
		span: "col-span-2",
		image: ycpr,
		imagePos: "object-center",
	},
	{
		type: "project",
		name: "Pixels & Pints",
		url: "https://pixels-og.netlify.app/",
		span: "col-span-1",
		image: pixels,
		imagePos: "object-center",
	},
	{ type: "empty", span: "col-span-1" },
	{
		type: "project",
		name: "Freezer Burn Wrestling Federation",
		url: "http://freezerburnwrestlingfederation.com",
		span: "col-span-1",
		image: fwf,
		imagePos: "object-center",
	},
	{
		type: "project",
		name: "Nathan Iles",
		url: "https://nathaniles.com/",
		span: "col-span-2",
		image: nate,
		imagePos: "object-center",
	},
	{
		type: "project",
		name: "Sprint Calculator",
		url: "https://cf-sprint-calc.netlify.app",
		span: "col-span-1",
		image: calc,
		imagePos: "object-center",
	},
	{ type: "empty", span: "col-span-1" },
	{
		type: "project",
		name: "The Yellow Dubmarine",
		url: "http://theyellowdubmarine.com",
		span: "col-span-2",
		image: dub,
		imagePos: "object-[center_8%]",
	},
];

export default function Portfolio() {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start 110%", "center center"],
	});

	const x = useTransform(scrollYProgress, [0, 1], ["-120vw", "10vw"]);
	const opacity = useTransform(scrollYProgress, [0, 0.4], [0, 1]);

	return (
		<div id="work" ref={ref} className="px-[10vw] py-24 overflow-x-clip">
			<motion.div className="bg-white px-10 py-10 max-w-2xl" style={{ x, opacity }}>
				<div className="flex items-center justify-between mb-8">
					<p className="text-xs tracking-widest uppercase text-gray-500">Work</p>
					<a
						href="/KConnolly.pdf"
						download
						className="flex flex-col items-center gap-1 opacity-60 hover:opacity-100 transition-opacity"
					>
						<span className="text-[10px] tracking-wide text-gray-500">download</span>
						<img src={resume.src} alt="resume" className="w-8 my-1" />
						<span className="text-[10px] tracking-wide text-gray-500">resume</span>
					</a>
				</div>
				<p className="text-gray-700 leading-relaxed mb-10 max-w-xl">
					{"I've been a builder and leader at: "}
					<a
						href="http://metalab.com"
						target="_blank"
						rel="noreferrer"
						className="underline hover:text-gray-500"
					>
						Metalab
					</a>
					,{" "}
					<a
						href="http://neofinancial.com"
						target="_blank"
						rel="noreferrer"
						className="underline hover:text-gray-500"
					>
						Neo Financial
					</a>
					,{" "}
					<a
						href="http://lighthouselabs.ca"
						target="_blank"
						rel="noreferrer"
						className="underline hover:text-gray-500"
					>
						Lighthouse Labs
					</a>
					,{" "}
					<a
						href="http://checkfront.com"
						target="_blank"
						rel="noreferrer"
						className="underline hover:text-gray-500"
					>
						Checkfront
					</a>
					{", + more."}
				</p>
				<p>Some fun widgets:</p>
				<div className="grid grid-cols-3 gap-2">
					{cells.map((cell, i) =>
						cell.type === "project" ? (
							<a
								key={i}
								href={cell.url}
								target="_blank"
								rel="noreferrer"
								className={`${cell.span} h-24 bg-gray-50 border border-gray-100 relative overflow-hidden flex items-end p-3 group hover:bg-gray-100 transition-colors`}
							>
								{cell.image && (
									<img
										src={cell.image.src}
										alt={cell.name}
										className={`absolute inset-0 w-full h-full object-cover ${cell.imagePos} opacity-0 group-hover:opacity-90 transition-opacity duration-300`}
									/>
								)}
								<span className="relative z-10 text-gray-800 text-sm font-thin leading-tight group-hover:text-white transition-colors">
									{cell.name}
								</span>
							</a>
						) : (
							<div key={i} className={`${cell.span} h-24 bg-white border border-gray-100`} />
						)
					)}
				</div>
			</motion.div>
		</div>
	);
}
