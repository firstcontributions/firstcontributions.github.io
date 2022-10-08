import React from "react";

import "./mobile-nav.css";
import Logo from "../../logo.svg";

export default function MobileNav({ modal, setModal }) {
	function close() {
		setModal(!modal);
		console.log(modal);
	}

	return (
		<nav className="mobile-nav">
			<div
				className={`ham-icon ${modal ? "rotate-ham" : null}`}
				onClick={close}
			>
				<i class="fa-solid fa-grip-lines-vertical"></i>
			</div>
			<img src={Logo} alt="logo" className="logo-nav" />
		</nav>
	);
}
