import "animate.css";
import "../styling/welcome.css";

import { useMediaQuery } from "react-responsive";

import Logo from "../assets/logo-rectangle.png";

function Welcome() {
	const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1024px)" });

	return (
		<div className="Welcome">
			{isTabletOrMobile ? (
				<div>
					<img src={Logo} alt="logo" className="logo_mobile" />
					<h1 className="animate__animated animate__fadeInUp">
						Fullstack Development, handled.
					</h1>
				</div>
			) : (
				<div>
					<img src={Logo} alt="logo" className="logo" />
					<h1 className="animate__animated animate__fadeInUp">
						Fullstack Development, handled.
					</h1>
				</div>
			)}
		</div>
	);
}

export default Welcome;
