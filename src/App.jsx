import React from 'react';
import './App.css';
import LinkButton from './components/LinkButton/LinkButton';
import Navbar from './components/Navbar/Navbar';
import CardsContainer from './components/ProjectList/CardsContainer';
import SocialShare from './components/SocialShare/SocialShare';

const App = () => {
  return (
    <div className="App">
        <Navbar />
        <div className="App-header">
            <h1>Make your first open source contribution in just 5 minutes</h1>
        </div>
        <LinkButton />
        <CardsContainer />
        <SocialShare/>
    </div>
  );
}

export default App;
