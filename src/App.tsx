import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";

import "./styling/app.css";

import { Home, Nineties } from "./pages";

function App() {
	const [isNineties, setIsNineties] = useState(false);
	const isTabletOrMobile = useMediaQuery({ query: "(max-width: 800px)" });

	const handle90sToggle = (checked: boolean): void => {
		setIsNineties(!isNineties);
	};
	return (
		<div className="App">
			{isNineties ? (
				<Nineties isNineties={isNineties} handle90sToggle={handle90sToggle} />
			) : (
				<Home
					isNineties={isNineties}
					isTabletOrMobile={isTabletOrMobile}
					handle90sToggle={handle90sToggle}
				/>
			)}
		</div>
	);
}

export default App;
