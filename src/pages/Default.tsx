import "../styling/default/default.css";

import { Welcome, Portfolio, Contact } from "../components/default";

type DefaultProps = {
	isNineties: boolean;
	handle90sToggle: (checked: boolean) => void;
};

export default function Default({ isNineties, handle90sToggle }: DefaultProps) {
	return (
		<div className="Default">
			<Welcome isNineties={isNineties} handle90sToggle={handle90sToggle} />
			<Portfolio />
			<Contact />
		</div>
	);
}
