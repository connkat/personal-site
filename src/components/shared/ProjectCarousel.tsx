"use client";

import { Carousel } from "react-responsive-carousel";
import useMediaQuery from "../../hooks/useMediaQuery";
import { calc, pixels, coffee, fwf, dub } from "../../assets/index";

export default function ProjectCarousel() {
	const isMobile = useMediaQuery("(max-width: 800px)");

	function handleClick(index: number): void | undefined {
		const urls = [
			"http://coffee-fix.net",
			"http://theyellowdubmarine.com",
			"https://pixels-og.netlify.app/",
			"http://freezerburnwrestlingfederation.com",
			"https://cf-sprint-calc.netlify.app",
		];
		if (urls[index]) window.open(urls[index]);
	}

	return (
		<div className="[&_.carousel-root]:transform-[scaleX(-1)] [&_.slide]:cursor-pointer">
			<Carousel
				autoPlay={true}
				infiniteLoop={true}
				interval={2000}
				width={isMobile ? "70%" : "50%"}
				showThumbs={false}
				showStatus={false}
				onClickItem={(index) => handleClick(index)}
			>
				<img src={coffee.src} alt="coffee" />
				<img src={dub.src} alt="dub" />
				<img src={pixels.src} alt="pixels" />
				<img src={fwf.src} alt="fwf" />
				<img src={calc.src} alt="calc" />
			</Carousel>
		</div>
	);
}
