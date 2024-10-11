import "./styling/app.css";
import React from "react";

import { Welcome, Portfolio, Contact } from "./components";

function App() {
	return (
		<div className="App">
			<Welcome />
			<Portfolio />
			<Contact />
		</div>
	);
}

export default App;
