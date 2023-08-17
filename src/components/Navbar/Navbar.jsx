import React from 'react';
import './Navbar.css';
import slack from './slack.svg';
import youtube from './youtube.svg';
import twitter  from './twitter.svg';
import github from './github.svg';

const Navbar = () => {
    return (
    <section>
        <nav>
            {/* <div></div>      */}
      {/* <div className="topnav"> */}
        <ul>
    <li data-xcoord="0px" class="active"><a href="https://join.slack.com/t/firstcontributors/shared_invite/zt-1n4y7xnk0-DnLVTaN6U9xLU79H5Hi62w"  target="_blank" rel="noopener noreferrer">
        <img src={slack} className="logo" alt="slack logo" />
        <span>Slack</span>
        </a></li>
        <li data-xcoord="160px" ><a href="https://www.youtube.com/channel/UCMXNFxCvyH5LhUwEcmY8qGQ" target="_blank" rel="noopener noreferrer">
        <img  src={youtube} className="logo" alt="youtube logo" />
            <span>Youtube</span>    
        </a></li>
        
        <li data-xcoord="320px" ><a href="https://twitter.com/1stContribution" target="_blank" rel="noopener noreferrer">
            <img   src={twitter} className="logo" alt="twitter logo" />
            <span>Twitter</span>
        </a></li>
        <li data-xcoord="480px" ><a href="https://github.com/firstcontributions/first-contributions" target="_blank" rel="noopener noreferrer">
            <img  src={github} className="logo" alt="github logo" />
            Github
        </a></li>
    </ul>
      {/* </div> */}
    </nav>
        </section>
    );
};

export default Navbar;
