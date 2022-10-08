import React from "react";

import "./main.css";

import MobileNav from "../MobileNav/MobileNav";
import LinkButton from "../LinkButton/LinkButton";
import CardsContainer from "../ProjectList/CardsContainer";

export default function Main({ modal, setModal }) {
	return (
		<main className="main">
			<MobileNav modal={modal} setModal={setModal} />
			<div className="header">
				<div className="App-header">
					<h1>Make Your First Open Source Contribution In 5 Minutes</h1>
				</div>
				<LinkButton />
			</div>
			<CardsContainer />
		</main>
	);
}
