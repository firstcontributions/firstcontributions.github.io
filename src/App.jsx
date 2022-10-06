import React from "react";
import "./App.css";

import Main from "./components/Main/Main";
import Sidebar from "./components/Sidebar/Sidebar";

export default class App extends React.Component {
	render() {
		return (
			<div className="App">
				<Sidebar />
				<Main />
			</div>
		);
	}
}
