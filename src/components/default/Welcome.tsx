"use client";

import "animate.css";
import useMediaQuery from "src/hooks/useMediaQuery";
import NinetiesSwitch from "../shared/NinetiesSwitch";
import Logo from "../../assets/logo-rectangle.png";

type WelcomeProps = {
	isNineties: boolean;
	handle90sToggle: (checked: boolean) => void;
};

export default function Welcome({ isNineties, handle90sToggle }: WelcomeProps) {
	const isMobile = useMediaQuery("(max-width: 800px)");

	return (
		<div className="h-screen">
			<div>
				<div className="relative z-[100] m-[4vh] flex items-center">
					<NinetiesSwitch isNineties={isNineties} handle90sToggle={handle90sToggle} />
					<p className="pl-[2vh]">What if this was 1999?</p>
				</div>
				<div>
					<img
						src={Logo.src}
						alt="logo"
						className={isMobile ? "w-full z-[1]" : "w-1/5 z-[1]"}
					/>
					<h1 className="animate__animated animate__fadeInUp text-right pr-[10%] leading-none font-thin">
						Fullstack Development, handled.
					</h1>
				</div>
				<div className={isMobile ? "pt-[5vh] pl-[5vh] text-[rgb(57,56,56)]" : "pt-[20vh] pl-[10vh] text-[rgb(57,56,56)]"}>
					<h4>
						Concatenation: link together in a chain or series. <br />I believe
						that I concatenate creativity and engineering within my software
						solutions.
					</h4>
					<p className="animate__animated animate__fadeIn">
						It is also a good pun that uses my name.
					</p>
				</div>
			</div>
		</div>
	);
}
