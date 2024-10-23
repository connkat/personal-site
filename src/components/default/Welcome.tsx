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
		<div id="Welcome">
			<div className={isMobileOrTable ? "welcome_mobile" : "welcome_desktop"}>
				<div className="switch">
					<NinetiesSwitch
						isNineties={isNineties}
						handle90sToggle={handle90sToggle}
					/>
					<p>What if this was 1999?</p>
				</div>
				<div>
					<img src={Logo} alt="logo" className={"logo"} />
					<h1 className="animate__animated animate__fadeInUp">
						Fullstack Development, handled.
					</h1>
				</div>
				<div className="definition">
					<h4>
						Concatenation: link together in a chain or series. <br />I believe
						that I concatenate creativity and engineering within my software
						solutions.
					</h4>
					<p className="animate__animated animate__fadeIn">
						It is also a good pun that uses my name.
					</p>
				</div>
			</div>
		</div>
	);
}
