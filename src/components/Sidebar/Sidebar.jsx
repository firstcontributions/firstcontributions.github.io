import React from "react";

import "./sidebar.css";

import Logo from "../../logo.svg";
const twitterLink =
	"https://twitter.com/intent/tweet?text=Yay%21%20I%20just%20made%20my%20first%20open%20source%20contribution%20with%20@1stcontribution.%20You%20can%20too%20at%20https%3A//goo.gl/66Axwe%0A&hashtags=OpenSource,CodeNewbie,Hacktoberfest";

const facebookLink =
	"https://www.facebook.com/sharer/sharer.php?u=https://roshanjossey.github.io/first-contributions&quote=Yay%21%20I%20just%20made%20my%20first%20open%20source%20contribution%20with%20First%20Contributions.%20You%20can%20too,%20by%20following%20a%20simple%20tutorial%20at%20https%3A//goo.gl/66Axwe&hashtag=%23Hacktoberfest";

const LinkedinLink =
	"https://www.linkedin.com/shareArticle?mini=true&url=https://goo.gl/66Axwe&title=First%20Contributions%20&summary=A%20project%20to%20help%20beginners%20get%20started%20with%20contributing%20to%20open%20source&source=https://roshanjossey.github.io";

export default function Sidebar() {
	return (
		<div className="sidebar">
			<img src={Logo} alt="logo" className="logo-main" />

			<div className="top-nav">
				<h3 className="heading-nav">Connect with us</h3>
				<ul className="nav-list">
					<li className="nav-item">
						<a
							href="https://firstcontributors.slack.com/join/shared_invite/zt-vchl8cde-S0KstI_jyCcGEEj7rSTQiA#/shared-invite/email"
							target="_blank"
							rel="noopener noreferrer"
						>
							<i class="fa-brands fa-slack"></i>

							<span>Slack</span>
						</a>
					</li>
					<li className="nav-item">
						<a
							href="https://www.youtube.com/channel/UCMXNFxCvyH5LhUwEcmY8qGQ"
							target="_blank"
							rel="noopener noreferrer"
						>
							<i class="fa-brands fa-youtube"></i>

							<span>Youtube</span>
						</a>
					</li>
					<li className="nav-item">
						<a
							href="https://twitter.com/1stContribution"
							target="_blank"
							rel="noopener noreferrer"
						>
							<i class="fa-brands fa-twitter"></i>

							<span>Twitter</span>
						</a>
					</li>
					<li className="nav-item">
						<a
							href="https://github.com/firstcontributions/first-contributions"
							target="_blank"
							rel="noopener noreferrer"
						>
							<i class="fa-brands fa-github"></i>
							Github
						</a>
					</li>
				</ul>
			</div>

			<div className="social-share">
				<h3 className="heading-nav">
					Share the news of your first contribution
				</h3>

				<ul className="social-list">
					<li className="social-items">
						<a href={twitterLink} rel="noopener noreferrer" target="_blank">
							<i class="fa-brands fa-square-twitter"></i>
						</a>
					</li>

					<li className="social-items">
						<a href={facebookLink} rel="noopener noreferrer" target="_blank">
							<i class="fa-brands fa-square-facebook"></i>
						</a>
					</li>

					<li className="social-items">
						<a href={LinkedinLink} rel="noopener noreferrer" target="_blank">
							<i class="fa-brands fa-linkedin"></i>
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
}
