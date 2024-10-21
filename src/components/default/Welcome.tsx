import "animate.css";
import "../../styling/default/welcome.css";

import NinetiesSwitch from "../NinetiesSwitch";

import Logo from "../../assets/logo-rectangle.png";

type WelcomeProps = {
	isNineties: boolean;
	isTabletOrMobile: boolean;
	handle90sToggle: (checked: boolean) => void;
};

function Welcome(props: WelcomeProps) {
	return (
		<div className="Welcome">
			<div className="switch">
				<NinetiesSwitch
					isNineties={props.isNineties}
					handle90sToggle={props.handle90sToggle}
				/>
			</div>
			{props.isTabletOrMobile ? (
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
