import React from 'react';
import XCard from './X';
import FacebookCard from './Facebook';
import LinkedinCard from './Linkedin';
import './SocialShare.css';

const SocialShare = () => (
    <section id='social-share'>
        <h2>Share the news of your first contribution</h2>
        <div id='social-shares-container'>
            <XCard/>
            <FacebookCard/>
            <LinkedinCard/>
        </div>
    </section>
);

export default SocialShare
