import React, { Component } from 'react';
import './Navbar.css';
import slack from './slack.svg';
import youtube from './youtube.svg';
import twitter  from './twitter.svg';
import github from './github.svg';
class Navbar extends Component {
    render() {
        return (
            <div className="topnav">
                <a href="https://join.slack.com/t/firstcontributors/shared_invite/enQtNjkxNzQwNzA2MTMwLTVhMWJjNjg2ODRlNWZhNjIzYjgwNDIyZWYwZjhjYTQ4OTBjMWM0MmFhZDUxNzBiYzczMGNiYzcxNjkzZDZlMDM"  target="_blank" rel="noopener noreferrer">
                <img src={slack} className="slack"/>
                <span>Slack</span>
                </a>
                <a href="https://www.youtube.com/channel/UCMXNFxCvyH5LhUwEcmY8qGQ" target="_blank" rel="noopener noreferrer">
                <img  src={youtube} className="youtube"/>
                <span>Youtube</span>    
                </a>
                <a href="https://twitter.com/1stContribution" target="_blank" rel="noopener noreferrer">
                <img   src={twitter} className="twitter"/>
                <span>Twitter</span>
                </a>
                <a href="https://github.com/firstcontributions/first-contributions" target="_blank" rel="noopener noreferrer">
                <img  src={github} className="github"/>
                Github
                </a>
            </div>
        );
    }
}

export default Navbar;
