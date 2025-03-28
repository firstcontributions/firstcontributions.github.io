import React from 'react';
import { Icon, IconPaths } from './icons.jsx';

const LinkedinLink = "https://www.linkedin.com/shareArticle?mini=true&url=https://goo.gl/66Axwe&title=First%20Contributions%20&summary=A%20project%20to%20help%20beginners%20get%20started%20with%20contributing%20to%20open%20source&source=https://roshanjossey.github.io"

const LinkedinCard = () => (
    <a className="icon-card linkedin" href={LinkedinLink} rel="noopener noreferrer" target="_blank" aria-label="Share the news of your first contribution on Linkedin">
        <Icon
            color="rgb(255, 255, 255)"
            size={50}
            icon={IconPaths.linkedin}
            boxStyle="0 0 24 28"
        />
    </a>
);

export default LinkedinCard;
