"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useRef, useEffect } from "react";

export default function Secondary() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, amount: 0.3 });
	const controls = useAnimation();

	useEffect(() => {
		if (isInView) {
			controls.start({ x: 0, opacity: 1 });
		}
	}, [isInView, controls]);

	return (
		<div id="about" ref={ref} className="min-h-screen flex items-center overflow-x-clip px-[10vw] py-24">
			<motion.div
				className="max-w-2xl bg-white px-10 py-10"
				initial={{ x: "100vw", opacity: 0 }}
				animate={controls}
				transition={{ type: "spring", stiffness: 60, damping: 20 }}
			>
				<p className="text-xs tracking-widest uppercase text-gray-500 mb-6">About</p>
				<h2 className="text-[clamp(1.5rem,3vw,2.5rem)] font-thin leading-snug text-gray-800 mb-6">
					Concatenation: link together in a chain or series.
				</h2>
				<p className="text-gray-700 leading-relaxed mb-4">
					I believe that I concatenate creativity and engineering within my software solutions. It is also a good pun that uses my name.
				</p>
				<p className="text-gray-700 leading-relaxed">
					I am a creator, a goal-seeker, always looking to be challenged. I play multiple musical instruments, speak 3 languages, and hold two university degrees while working towards my third. When I&apos;m not coding, you&apos;ll find me ski touring, marathon running, doing textile art, or running networking groups.
				</p>
			</motion.div>
		</div>
	);
}
