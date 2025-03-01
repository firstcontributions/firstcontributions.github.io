import React from 'react';
import './App.css';
import LinkButton from './components/LinkButton/LinkButton';
import Navbar from './components/Navbar/Navbar';
import CardsContainer from './components/ProjectList/CardsContainer';
// import ScrollUpButton from './components/ScrollUpButton/ScrollUpButton';
import SocialShare from './components/SocialShare/SocialShare';

const App = () => {
  return (
    <div className="App">
        <div className="App-header">
            <h1>Make your first <br/> <a href="https://firstcontributions.github.io/contribute-to-opensource"> open source <span>contribution</span> </a> <br/> in 5 minutes</h1>
        </div>
        <LinkButton />
        <CardsContainer />
        <SocialShare/>
    </div>
  );
}

export default App;
