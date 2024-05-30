import React from 'react';
import { Icon, IconPaths } from './icons.js';

const xLink = "https://x.com/intent/post?text=Yay%21%20I%20just%20made%20my%20first%20open%20source%20contribution%20with%20@1stcontribution.%20You%20can%20too%20at%20https%3A//goo.gl/66Axwe%0A&hashtags=OpenSource,CodeNewbie,Hacktoberfest"

const XCard = () => (
    <a className="icon-card x" href={xLink} rel="noopener noreferrer" target="_blank" aria-label="Share the news of your first contribution on X">
        <Icon
            color="rgb(255, 255, 255)"
            size={40}
            icon={IconPaths.x}
            boxStyle="0 0 22 22"
        />
    </a>
);

export default XCard;
