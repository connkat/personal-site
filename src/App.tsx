import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { fairyDustCursor } from "cursor-effects";

import "./styling/app.css";

import { Default, Nineties } from "./pages";

function App() {
	const [isNineties, setIsNineties] = useState(false);
	const isTabletOrMobile = useMediaQuery({ query: "(max-width: 800px)" });

	const handle90sToggle = (): void => {
		setIsNineties(!isNineties);
		if (isNineties) {
			window.location.reload();
		}
	};

	useEffect(() => {
		if (isNineties) {
			// @ts-expect-error Parameter 'name' implicitly has an 'any' type.ts(7006)
			new fairyDustCursor({
				colors: ["red", "blue"],
			});
		}
	}, [isNineties, setIsNineties]);

	return (
		<div className="App">
			{isNineties ? (
				<Nineties isNineties={isNineties} handle90sToggle={handle90sToggle} />
			) : (
				<Default
					isNineties={isNineties}
					isTabletOrMobile={isTabletOrMobile}
					handle90sToggle={handle90sToggle}
				/>
			)}
		</div>
	);
}

export default App;
