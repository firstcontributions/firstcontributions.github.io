import React from 'react';
import './App.css';
import LinkButton from './components/LinkButton/LinkButton';
import Navbar from './components/Navbar/Navbar';
import CardsContainer from './components/ProjectList/CardsContainer';
import ScrollUpButton from './components/ScrollUpButton/ScrollUpButton';
import SocialShare from './components/SocialShare/SocialShare';

const App = () => {
  return (
    <div className="App">
        <Navbar />
        <div className="App-header">
            <h1>Make your first open source contribution in less than 5 minutes</h1>
        </div>
        <ScrollUpButton />
        <LinkButton />
        <CardsContainer />
        <SocialShare/>
    </div>
  );
}

export default App;
