import React from 'react';
import './Navbar.css';
import slack from './slack.svg';
import youtube from './youtube.svg';
import twitter  from './twitter.svg';
import github from './github.svg';

const Navbar = () => {
  return (
      <div className="topnav">
          <a href="https://join.slack.com/t/firstcontributors/shared_invite/zt-iywfifau-_aMtdwTjBoMzQqzW8~YUUA"  target="_blank" rel="noopener noreferrer">
              <img src={slack} className="logo" alt="slack logo" />
              <span>Slack</span>
          </a>
          <a href="https://www.youtube.com/channel/UCMXNFxCvyH5LhUwEcmY8qGQ" target="_blank" rel="noopener noreferrer">
              <img  src={youtube} className="logo" alt="youtube logo" />
              <span>Youtube</span>    
          </a>
          <a href="https://twitter.com/1stContribution" target="_blank" rel="noopener noreferrer">
              <img   src={twitter} className="logo" alt="twitter logo" />
              <span>Twitter</span>
          </a>
          <a href="https://github.com/firstcontributions/first-contributions" target="_blank" rel="noopener noreferrer">
              <img  src={github} className="logo" alt="github logo" />
              Github
          </a>
      </div>
  );
};

export default Navbar;
