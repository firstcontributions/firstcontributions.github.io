import React from "react";

import "./main.css";

import LinkButton from "../LinkButton/LinkButton";
import CardsContainer from "../ProjectList/CardsContainer";

export default function Main() {
	return (
		<main className="main">
			<div className="App-header">
				<h1>Make Your First Open Source Contribution In 5 Minutes</h1>
			</div>
			<LinkButton />
			<CardsContainer />
		</main>
	);
}
