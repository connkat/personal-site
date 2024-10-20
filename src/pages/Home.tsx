import "../styling/home.css";

import { Welcome, Portfolio, Contact } from "../components";

type HomeProps = {
	isNineties: boolean;
	isTabletOrMobile: boolean;
	handle90sToggle: (checked: boolean) => void;
};

function Home(props: HomeProps) {
	return (
		<div className="Home">
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

export default Home;
