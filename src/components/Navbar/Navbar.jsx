import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component {
    render() {
        return (
            <div className="topnav">
            	<ul>
            		<li>
            			<a href="https://join.slack.com/t/firstcontributors/shared_invite/enQtMzE1MTYwNzI3ODQ0LTZiMDA2OGI2NTYyNjM1MTFiNTc4YTRhZTg4OWZjMzA0ZWZmY2UxYzVkMzI1ZmVmOWI4ODdkZWQwNTM2NDVmNjY"  target="_blank" rel="noopener noreferrer"><i className="fa fa-slack"></i> Slack</a>
            		</li>
            		<li>
            			<a href="https://twitter.com/1stContribution" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter"></i> Twitter</a>
            		</li>
            		<li>
            			<a href="https://github.com/Roshanjossey/first-contributions" target="_blank" rel="noopener noreferrer"><i className="fa fa-github"></i> GitHub</a>
            		</li>
            	</ul>
            </div>
        );
    }
}

export default Navbar;
