import React from "react";

import "../styling/home.css";

import { Welcome, Portfolio, Contact } from "../components";

function Home() {
	return (
		<div className="Home">
			<Welcome />
			<Portfolio />
			<Contact />
		</div>
	);
}

export default Home;
