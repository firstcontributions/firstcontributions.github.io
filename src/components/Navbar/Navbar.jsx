import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component {
    render() {
        return (
            <div className="topnav">
                <a href="https://join.slack.com/t/firstcontributors/shared_invite/enQtNjkxNzQwNzA2MTMwLTVhMWJjNjg2ODRlNWZhNjIzYjgwNDIyZWYwZjhjYTQ4OTBjMWM0MmFhZDUxNzBiYzczMGNiYzcxNjkzZDZlMDM"  target="_blank" rel="noopener noreferrer">Slack</a>
                <a href="https://www.youtube.com/channel/UCMXNFxCvyH5LhUwEcmY8qGQ" target="_blank" rel="noopener noreferrer">YouTube</a>
                <a href="https://twitter.com/1stContribution" target="_blank" rel="noopener noreferrer">Twitter</a>
                <a href="https://github.com/firstcontributions/first-contributions" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
        );
    }
}

export default Navbar;
