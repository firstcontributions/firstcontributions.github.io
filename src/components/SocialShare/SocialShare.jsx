import React from "react";
import TwitterCard from "./Twitter";
import FacebookCard from "./Facebook";
import LinkedinCard from "./Linkedin";
import "./SocialShare.css";

const SocialShare = () => (
  <footer class="fc-footer">
    <div class="footer-container">
      <div class="footer-section about">
        <h2>First Contributions</h2>
        <p>
          Making open-source contributions easy for everyone. Join us and make
          your first contribution today!
        </p>
      </div>

      <div class="footer-section links">
        <h3>Quick Links</h3>
        <ul>
          <li>
            <a
              href="https://github.com/firstcontributions/first-contributions"
              target="_blank"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://firstcontributions.github.io/#project-list"
              target="_blank"
            >
              Projects
            </a>
          </li>
          <li>
            <a href="#getting-started">Getting Started</a>
          </li>
          <li>
            <a href="https://firstcontributions.github.io/#contributors">
              Contributors
            </a>
          </li>
        </ul>
      </div>

      <div class="footer-section social">
        <h3>Follow Us</h3>
        <div class="social-icons">
          <a href="https://twitter.com/first_tm" target="_blank">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="https://facebook.com" target="_blank">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a href="https://linkedin.com" target="_blank">
            <i class="fab fa-linkedin-in"></i>
          </a>
          <a href="https://github.com/firstcontributions" target="_blank">
            <i class="fab fa-github"></i>
          </a>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <p>Made with ❤️ for open-source | First Contributions &copy; 2025</p>
    </div>
  </footer>
);

export default SocialShare;
