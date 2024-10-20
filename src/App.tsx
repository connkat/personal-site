import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./styling/app.css";

import { Home, Nineties } from "./pages";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/90s" element={<Nineties />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
