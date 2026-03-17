"use client";

import "animate.css";

export default function Welcome() {
	return (
		<div className="h-screen">
			<div className="absolute top-[20%] w-full">
				<h1 className="animate__animated animate__fadeInUp text-right pr-[5%] leading-none font-thin text-[clamp(2rem,6vw,5rem)] tracking-tight text-gray-700 drop-shadow-lg">
					Fullstack Development, handled.
				</h1>
			</div>
		</div>
	);
}
