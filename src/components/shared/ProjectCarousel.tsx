import { Carousel } from "react-responsive-carousel";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../../styling/project-carousel.css";

import useMediaQuery from "../../hooks/useMediaQuery";

import { calc, pixels, coffee, fwf, dub } from "../../assets/index";

export default function ProjectCarousel() {
	const isMobileOrTable = useMediaQuery("(max-width: 800px)");

	function handleClick(index: number): void | undefined {
		if (index === 0) {
			window.open("http://coffee-fix.net");
		}
		if (index === 1) {
			window.open("http://theyellowdubmarine.com");
		}
		if (index === 2) {
			window.open("https://pixels-og.netlify.app/");
		}
		if (index === 3) {
			window.open("https://freezerburn-wrestling-federation.netlify.app/");
		}
		if (index === 4) {
			window.open("https://cf-sprint-calc.netlify.app");
		}
	}

	return (
		<div className="ProjectCarousel">
			<div className="carousel">
				<Carousel
					autoPlay={true}
					infiniteLoop={true}
					interval={2000}
					width={isMobileOrTable ? "70%" : "50%"}
					showThumbs={false}
					showStatus={false}
					onClickItem={(index, item) => handleClick(index)}
				>
					<img className="proj-image" src={coffee} alt="coffee" />
					<img className="proj-image" src={dub} alt="dub" />
					<img className="proj-image" src={pixels} alt="pixels" />
					<img className="proj-image" src={fwf} alt="fwf" />
					<img className="proj-image" src={calc} alt="calc" />
				</Carousel>
			</div>
		</div>
	);
}
