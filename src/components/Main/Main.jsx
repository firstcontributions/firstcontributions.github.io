import React from "react";

import "./main.css";

import LinkButton from "../LinkButton/LinkButton";
import CardsContainer from "../ProjectList/CardsContainer";

export default function Main() {
	return (
		<main className="main">
			<div className="App-header">
				<h1>Make your first open source contribution in 5 minutes</h1>
			</div>
			<LinkButton />
			<CardsContainer />
		</main>
	);
}
