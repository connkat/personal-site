import "animate.css";
import "../../styling/default/welcome.css";
import useMediaQuery from "src/hooks/useMediaQuery";

import NinetiesSwitch from "../shared/NinetiesSwitch";

import Logo from "../../assets/logo-rectangle.png";

type WelcomeProps = {
	isNineties: boolean;
	handle90sToggle: (checked: boolean) => void;
};

export default function Welcome({ isNineties, handle90sToggle }: WelcomeProps) {
	const isMobileOrTable = useMediaQuery("(max-width: 800px)");

	return (
		<div className="Welcome">
			<div className="switch">
				<NinetiesSwitch
					isNineties={isNineties}
					handle90sToggle={handle90sToggle}
				/>
			</div>
			{isMobileOrTable ? (
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
