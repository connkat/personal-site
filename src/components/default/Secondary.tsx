"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Secondary() {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start end", "center center"],
	});

	const x = useTransform(scrollYProgress, [0, 1], ["120vw", "0vw"]);
	const opacity = useTransform(scrollYProgress, [0, 0.4], [0, 1]);

	return (
		<div id="about" ref={ref} className="flex items-center overflow-x-clip px-[10vw] py-32">
			<motion.div
				className="max-w-2xl bg-white px-10 py-10 ml-auto mr-[10vw] rounded-lg"
				style={{ x, opacity }}
			>
				<p className="text-xs tracking-widest uppercase text-gray-500 mb-6">About</p>
				<h2 className="text-[clamp(1.5rem,3vw,2.5rem)] font-thin leading-snug text-gray-800 mb-6">
					Concatenation: link together in a chain or series.
				</h2>
				<p className="text-gray-700 leading-relaxed mb-4">
					I believe that I concatenate creativity and engineering within my software solutions. It
					is also a good pun that uses my name.
				</p>
				<p className="text-gray-700 leading-relaxed">
					I am a creator, a goal-seeker, always looking to be challenged. I play multiple musical
					instruments, speak 3 languages, and hold two university degrees. When I&apos;m not coding,
					you&apos;ll find me ski touring, marathon running, doing textile art, or running
					networking groups.
				</p>
			</motion.div>
		</div>
	);
}
