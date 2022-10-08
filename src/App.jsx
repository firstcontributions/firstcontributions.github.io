import React from "react";
import "./App.css";

import Main from "./components/Main/Main";
import Sidebar from "./components/Sidebar/Sidebar";

export default function App() {
	const [modal, setModal] = React.useState(true);

	return (
		<div className="App">
			<Sidebar modal={modal} setModal={setModal} />
			<Main modal={modal} setModal={setModal} />

			<div class="Scroll-Up-Wrapper">
				<div
					class="scroll-text"
					onClick={() => {
						window.scrollTo({
							top: 0,
							left: 0,
							behavior: "smooth",
						});

						console.log("working!");
					}}
				>
					<i class="fa-solid fa-arrow-left-long Scroll-Down"></i> Scroll To Top
				</div>
			</div>
		</div>
	);
}
