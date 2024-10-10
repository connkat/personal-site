import "./portfolio.css";
import "react-multi-carousel/lib/styles.css";

import Carousel from "react-multi-carousel";

import coffee from "./assets/ex-coffee.png";
import fwf from "./assets/ex-fwf.png";
import dub from "./assets/ex-dub.png";

function Portfolio() {
	const responsive = {
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 2,
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 2,
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
		},
	};
	return (
		<div className="Portfolio">
			<div className="textBox">
				<h1 className="animate__animated animate__fadeInUp">About Kat</h1>
				<h2>I am a seasoned Fullstack Software Developer.</h2>
				<h3>
					With 6 years of hands on roles in tech and extensive leadership
					experience, I bring careful planning and meticulous attention to
					detail to every part of my work.
				</h3>
				<h3>
					I am a self-starter. She is motivated to tackle any issue, no matter
					how complex it might seem. I have jumped into complex projects and
					picked up necessary skills to succeed beyond just software
					development.
				</h3>
				<h3>
					I am extremely personable and works hard to maintain and nurture
					relationships across the board.
				</h3>
			</div>
			<div className="carousel">
				<h1>Fun projects</h1>
				<h3>
					I could go on about my professional experience with: <br />
					<a href="http://neofinancial.com" target="_blank" rel="noreferrer">
						Neo Financial
					</a>
					,{" "}
					<a href="http://lighthouselabs.ca" target="_blank" rel="noreferrer">
						Lighthouse Labs
					</a>
					,{" "}
					<a href="http://checkfront.com" target="_blank" rel="noreferrer">
						Checkfront
					</a>
					, or my Freelance work, <br />
					but instead here are some of my fun personal projects:
				</h3>
				<Carousel
					swipeable={false}
					draggable={false}
					showDots={true}
					responsive={responsive}
					ssr={true}
					infinite={true}
					// autoPlay={true}
					// autoPlaySpeed={1000}
					keyBoardControl={true}
					customTransition="all .5"
					transitionDuration={500}
					containerClass="carousel-container"
					removeArrowOnDeviceType={["tablet", "mobile"]}
					dotListClass="custom-dot-list-style"
					itemClass="carousel-item-padding-40-px"
				>
					<a href="http://coffee-fix.net" target="_blank" rel="noreferrer">
						<img src={coffee} alt="coffee" />
					</a>
					<a
						href="http://freezerburnwrestlingfederation.com"
						target="_blank"
						rel="noreferrer"
					>
						<img src={fwf} alt="fwf" />
					</a>
					<a
						href="http://theyellowdubmarine.com"
						target="_blank"
						rel="noreferrer"
					>
						<img src={dub} alt="dub" />
					</a>
				</Carousel>
			</div>
		</div>
	);
}

export default Portfolio;
