import React, { useState, useEffect } from "react";
import { fairyDustCursor } from "cursor-effects";

import { Default, Nineties } from "./pages";

import "./styling/app.css";

function App() {
	const [isNineties, setIsNineties] = useState(false);

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
				<Default isNineties={isNineties} handle90sToggle={handle90sToggle} />
			)}
		</div>
	);
}

export default App;
