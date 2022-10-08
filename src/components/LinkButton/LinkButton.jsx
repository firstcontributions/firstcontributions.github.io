import React, { Component } from "react";
import "./LinkButton.css";

class LinkButton extends Component {
	render() {
		return (
			<div className="LinkButton-Wrapper">
				<a
					className="LinkButton"
					href="https://github.com/firstcontributions/first-contributions/blob/master/README.md"
				>
					<span> Get started </span>
				</a>

				<div className="Scroll-Down-Wrapper">
					<div
						className="scroll-text"
						onClick={() => {
							window.scrollBy({
								top: window.innerHeight - 80,
								left: 0,
								behavior: "smooth",
							});
						}}
					>
						<i class="fa-solid fa-arrow-left-long Scroll-Down"></i> Scroll
					</div>
				</div>
			</div>
		);
	}
}

export default LinkButton;
