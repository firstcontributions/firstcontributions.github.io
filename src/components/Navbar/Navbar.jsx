import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component {
    render() {
        return (
            <div className="topnav">
                <a className="slack" href="https://join.slack.com/t/firstcontributors/shared_invite/enQtMzE1MTYwNzI3ODQ0LTZiMDA2OGI2NTYyNjM1MTFiNTc4YTRhZTg4OWZjMzA0ZWZmY2UxYzVkMzI1ZmVmOWI4ODdkZWQwNTM2NDVmNjY"  target="_blank" rel="noopener noreferrer"><ion-icon  name="logo-slack"></ion-icon></a>
                <a className="twitter" href="https://twitter.com/1stContribution" target="_blank" rel="noopener noreferrer"><ion-icon name="logo-twitter" ></ion-icon></a>
                <a className="github" href="https://github.com/Roshanjossey/first-contributions" target="_blank" rel="noopener noreferrer"><ion-icon name="logo-github" ></ion-icon></a>
            </div>
        );
    }
}

export default Navbar;
