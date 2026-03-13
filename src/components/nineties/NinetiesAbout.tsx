"use client";

import useMediaQuery from "src/hooks/useMediaQuery";

export default function NinetiesAbout() {
	const isMobile = useMediaQuery("(max-width: 800px)");

	return (
		<div className="px-[5vh]">
			<div id="about">
				<div>
					<div className="flex">
						<p>I am passionate about web design!</p>
						<p className="text-[8px] pt-[1vh]">~*just kidding*~</p>
					</div>
					<div className="flex">
						<p>
							While I am not a designer, I am a skilled fullstack* developer,
							with substantial experience in both back and front end technologies.
						</p>
						<p className="text-[8px] pt-[1vh]">*you can debate if fullstack devs are real</p>
					</div>
				</div>
			</div>
		</div>
	);
}
