import { Carousel } from "react-responsive-carousel";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../../styling/project-carousel.css";

import { calc, pixels, coffee, fwf, dub } from "../../assets/index";

type ProjectCarouselProps = {
	isTabletOrMobile: boolean;
};

export default function ProjectCarousel({
	isTabletOrMobile,
}: ProjectCarouselProps) {
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
			window.open("http://freezerburnwrestlingfederation.com");
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
					width={isTabletOrMobile ? "70%" : "50%"}
					showThumbs={false}
					showStatus={false}
					onClickItem={(index, item) => handleClick(index)}
				>
					<img src={coffee} alt="coffee" />
					<img src={dub} alt="dub" />
					<img src={pixels} alt="pixels" />
					<img src={fwf} alt="fwf" />
					<img src={calc} alt="calc" />
				</Carousel>
			</div>
		</div>
	);
}
