import React from 'react';
import './Navbar.css';
import slack from './slack.svg';
import youtube from './youtube.svg';
import x from './x.svg';
import github from './github.svg';

const Navbar = () => {
  return (
      <div className="topnav">
          <a href="https://join.slack.com/t/firstcontributors/shared_invite/zt-1n4y7xnk0-DnLVTaN6U9xLU79H5Hi62w"  target="_blank" rel="noopener noreferrer">
              <img src={slack} className="logo" alt="slack logo" />
              <span>Slack</span>
          </a>
          <a href="https://www.youtube.com/channel/UCMXNFxCvyH5LhUwEcmY8qGQ" target="_blank" rel="noopener noreferrer">
              <img  src={youtube} className="logo" alt="youtube logo" />
              <span>Youtube</span>    
          </a>
          <a href="https://x.com/1stContribution" target="_blank" rel="noopener noreferrer">
              <img   src={x} className="logo" alt="x logo" />
              <span>X</span>
          </a>
          <a href="https://github.com/firstcontributions/first-contributions" target="_blank" rel="noopener noreferrer">
              <img  src={github} className="logo" alt="github logo" />
              <span>GitHub</span>
          </a>
      </div>
  );
};

export default Navbar;
