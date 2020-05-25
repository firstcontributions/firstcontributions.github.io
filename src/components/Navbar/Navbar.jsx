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
                <img src={slack} className="slack"/>
                <a href="https://join.slack.com/t/firstcontributors/shared_invite/enQtNjkxNzQwNzA2MTMwLTVhMWJjNjg2ODRlNWZhNjIzYjgwNDIyZWYwZjhjYTQ4OTBjMWM0MmFhZDUxNzBiYzczMGNiYzcxNjkzZDZlMDM"  target="_blank" rel="noopener noreferrer">Slack</a>
                <img  src={youtube} className="youtube"/>
                <a href="https://www.youtube.com/channel/UCMXNFxCvyH5LhUwEcmY8qGQ" target="_blank" rel="noopener noreferrer">YouTube</a>
                <img   src={twitter} className="twitter"/>
                <a href="https://twitter.com/1stContribution" target="_blank" rel="noopener noreferrer">Twitter</a>
                <img  src={github} className="github"/>
                <a href="https://github.com/firstcontributions/first-contributions" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
        );
    }
}

export default Navbar;
