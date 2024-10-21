import "animate.css";
import "../../styling/default/welcome.css";

import NinetiesSwitch from "../NinetiesSwitch";

import Logo from "../../assets/logo-rectangle.png";

type WelcomeProps = {
	isNineties: boolean;
	isTabletOrMobile: boolean;
	handle90sToggle: (checked: boolean) => void;
};

function Welcome({
	isNineties,
	isTabletOrMobile,
	handle90sToggle,
}: WelcomeProps) {
	return (
		<div className="Welcome">
			<div className="switch">
				<NinetiesSwitch
					isNineties={isNineties}
					handle90sToggle={handle90sToggle}
				/>
			</div>
			{isTabletOrMobile ? (
				<div>
					<img src={Logo} alt="logo" className="logo_mobile" />
					<h1 className="animate__animated animate__fadeInUp">
						Fullstack Development, handled.
					</h1>
				</div>
			) : (
				<div>
					<img src={Logo} alt="logo" className="logo_desktop" />
					<h1 className="animate__animated animate__fadeInUp">
						Fullstack Development, handled.
					</h1>
				</div>
			)}
		</div>
	);
}

export default Welcome;
