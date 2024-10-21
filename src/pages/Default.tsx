import "../styling/default/default.css";

import { Welcome, Portfolio, Contact } from "../components/default";

type DefaultProps = {
	isNineties: boolean;
	isTabletOrMobile: boolean;
	handle90sToggle: (checked: boolean) => void;
};

function Default(props: DefaultProps) {
	return (
		<div className="Default">
			<Welcome
				isNineties={props.isNineties}
				isTabletOrMobile={props.isTabletOrMobile}
				handle90sToggle={props.handle90sToggle}
			/>
			<Portfolio isTabletOrMobile={props.isTabletOrMobile} />
			<Contact />
		</div>
	);
}

export default Default;
