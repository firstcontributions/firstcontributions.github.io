import React from "react";

import "./sidebar.css";

import Logo from "../../logo.svg";

export default function Sidebar() {
	return (
		<div className="sidebar">
			<img src={Logo} alt="logo" className="logo-main" />

			<div className="topnav">
				<a
					href="https://firstcontributors.slack.com/join/shared_invite/zt-vchl8cde-S0KstI_jyCcGEEj7rSTQiA#/shared-invite/email"
					target="_blank"
					rel="noopener noreferrer"
				>
					<i class="fa-brands fa-slack"></i>
					<span>Slack</span>
				</a>
				<a
					href="https://www.youtube.com/channel/UCMXNFxCvyH5LhUwEcmY8qGQ"
					target="_blank"
					rel="noopener noreferrer"
				>
					<i class="fa-brands fa-youtube"></i>
					<span>Youtube</span>
				</a>
				<a
					href="https://twitter.com/1stContribution"
					target="_blank"
					rel="noopener noreferrer"
				>
					<i class="fa-brands fa-twitter"></i>
					<span>Twitter</span>
				</a>
				<a
					href="https://github.com/firstcontributions/first-contributions"
					target="_blank"
					rel="noopener noreferrer"
				>
					<i class="fa-brands fa-github"></i>
					Github
				</a>
			</div>
		</div>
	);
}
