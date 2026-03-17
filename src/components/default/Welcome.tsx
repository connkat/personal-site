"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import useMediaQuery from "src/hooks/useMediaQuery";

export default function Welcome() {
	const isMobile = useMediaQuery("(max-width: 800px)");
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start start", "end start"],
	});

	const y = useTransform(scrollYProgress, [0, 1], ["30vh", "0vh"]);
	const opacity = useTransform(scrollYProgress, [0, 0.15, 0.5], isMobile ? [1, 1, 0] : [0, 1, 0]);

	return (
		<div ref={ref} className="h-[70vh] overflow-hidden">
			<motion.div className="absolute top-[20%] w-full" style={{ y, opacity }}>
				<h1 className="text-right pr-[5%] leading-none font-thin text-[clamp(2rem,6vw,5rem)] tracking-tight text-gray-700 drop-shadow-lg">
					Fullstack Development, handled.
				</h1>
			</motion.div>
		</div>
	);
}
