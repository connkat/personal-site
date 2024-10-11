import "animate.css";
import "../styling/welcome.css";

import Logo from "../assets/logo-rectangle.png";

function Welcome() {
	return (
		<div className="Welcome">
			<img src={Logo} alt="logo" className="logo" />
			<h1 className="animate__animated animate__fadeInUp">
				Fullstack Development, handled.
			</h1>
		</div>
	);
}

export default Welcome;
