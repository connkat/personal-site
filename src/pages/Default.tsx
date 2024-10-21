import "../styling/default/default.css";

import { Welcome, Portfolio, Contact } from "../components/default";

type DefaultProps = {
	isNineties: boolean;
	isTabletOrMobile: boolean;
	handle90sToggle: (checked: boolean) => void;
};

export default function Default({
	isNineties,
	isTabletOrMobile,
	handle90sToggle,
}: DefaultProps) {
	return (
		<div className="Default">
			<Welcome
				isNineties={isNineties}
				isTabletOrMobile={isTabletOrMobile}
				handle90sToggle={handle90sToggle}
			/>
			<Portfolio isTabletOrMobile={isTabletOrMobile} />
			<Contact />
		</div>
	);
}
