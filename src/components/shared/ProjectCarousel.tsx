"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { calc, pixels, coffee, fwf, dub } from "../../assets/index";

const slides = [
	{ src: coffee, alt: "coffee", url: "http://coffee-fix.net" },
	{ src: dub, alt: "dub", url: "http://theyellowdubmarine.com" },
	{ src: pixels, alt: "pixels", url: "https://pixels-og.netlify.app/" },
	{ src: fwf, alt: "fwf", url: "http://freezerburnwrestlingfederation.com" },
	{ src: calc, alt: "calc", url: "https://cf-sprint-calc.netlify.app" },
];

export default function ProjectCarousel() {
	const [emblaRef] = useEmblaCarousel({ loop: true }, [
		Autoplay({ delay: 2000, stopOnInteraction: false }),
	]);

	return (
		<div className="overflow-hidden w-1/2 mx-auto max-sm:w-[70%]" ref={emblaRef}>
			<div className="flex">
				{slides.map(({ src, alt, url }) => (
					<div
						key={alt}
						className="flex-[0_0_100%] cursor-pointer"
						onClick={() => window.open(url)}
					>
						<img src={src.src} alt={alt} className="w-full object-cover" />
					</div>
				))}
			</div>
		</div>
	);
}
