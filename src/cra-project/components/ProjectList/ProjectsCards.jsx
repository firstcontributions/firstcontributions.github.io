import React from "react";
import "./css/project-cards.css";
import defaultLogo from './default.png';

const Card = ({
  projectLink,
  logoLink,
  name,
  description,
  tags: propsTags,
}) => {
  const [imageLoading, setImageLoading] = React.useState(true);
  const [imageError, setImageError] = React.useState(false);
  const [buttonState, setButtonState] = React.useState('idle'); // idle, loading, success, error

  // Tag categorization function
  const getTagCategory = (tag) => {
    const lowerTag = tag.toLowerCase();
    
    // Language tags
    if (['javascript', 'typescript', 'python', 'java', 'c++', 'c#', 'go', 'rust', 'php', 'ruby', 'swift', 'kotlin', 'dart', 'scala', 'clojure', 'f#', 'haskell', 'r', 'matlab'].includes(lowerTag)) {
      return 'language';
    }
    
    // Framework tags
    if (['react', 'vue', 'angular', 'svelte', 'ember', 'django', 'flask', 'express', 'laravel', 'rails', 'spring', 'next', 'nuxt', 'gatsby', 'sveltekit', 'astro'].includes(lowerTag)) {
      return 'framework';
    }
    
    // Tool tags
    if (['webpack', 'babel', 'eslint', 'prettier', 'jest', 'cypress', 'docker', 'kubernetes', 'git', 'npm', 'yarn', 'vite', 'rollup', 'parcel'].includes(lowerTag)) {
      return 'tool';
    }
    
    // Platform tags
    if (['android', 'ios', 'web', 'desktop', 'mobile', 'server', 'cloud', 'aws', 'azure', 'gcp', 'heroku', 'netlify', 'vercel'].includes(lowerTag)) {
      return 'platform';
    }
    
    // Concept tags
    if (['machine learning', 'ai', 'blockchain', 'cryptocurrency', 'open source', 'api', 'database', 'nosql', 'sql', 'graphql', 'rest', 'microservices', 'devops', 'ci/cd'].includes(lowerTag)) {
      return 'concept';
    }
    
    return 'default';
  };

  let tags = [];

  if (propsTags) {
    const maxVisibleTags = 4;
    const visibleTags = propsTags.slice(0, maxVisibleTags);
    const remainingCount = propsTags.length - maxVisibleTags;
    
    tags = visibleTags.map((tag, key) => {
      const category = getTagCategory(tag);
      return (
        <div 
          key={key} 
          data-category={category} 
          title={`${tag} - ${category}`}
          tabIndex={0}
          role="button"
          aria-label={`Filter by ${tag}`}
        >
          <p>{tag}</p>
        </div>
      );
    });
    
    // Add counter for remaining tags
    if (remainingCount > 0) {
      tags.push(
        <div 
          key="tag-counter" 
          className="tag-counter" 
          title={`${remainingCount} more tags`}
          tabIndex={0}
          role="button"
          aria-label={`${remainingCount} more tags`}
        >
          <p>+{remainingCount}</p>
        </div>
      );
    }
  }

  const handleImageLoad = () => {
    setImageLoading(false);
  };

  const handleImageError = () => {
    setImageError(true);
    setImageLoading(false);
  };

  const handleButtonClick = (e) => {
    e.preventDefault();
    
    if (buttonState === 'loading') return;
    
    setButtonState('loading');
    
    // Simulate loading state for better UX
    setTimeout(() => {
      setButtonState('success');
      
      // Reset to idle after showing success
      setTimeout(() => {
        setButtonState('idle');
        // Open the project link
        window.open(projectLink, '_blank', 'noopener,noreferrer');
      }, 1000);
    }, 800);
  };

  const getButtonContent = () => {
    switch (buttonState) {
      case 'loading':
        return (
          <>
            <span className="button-text">Opening...</span>
            <span className="button-icon">⏳</span>
          </>
        );
      case 'success':
        return (
          <>
            <span className="button-text">Opened!</span>
            <span className="button-icon">✅</span>
          </>
        );
      case 'error':
        return (
          <>
            <span className="button-text">Try Again</span>
            <span className="button-icon">🔄</span>
          </>
        );
      default:
        return (
          <>
            <span className="button-text">View Project</span>
            <span className="button-icon">🚀</span>
          </>
        );
    }
  };

  return (
    <div className="Card-Container">
      <a className="Card-Real-Link" href={projectLink} target='_blank' rel="noopener noreferrer">
        <div className="Card-Header">
          {imageLoading && !imageError && (
            <div className="Project-Logo" style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'rgba(255, 255, 255, 0.2)',
              color: 'white',
              fontSize: '12px'
            }}>
              Loading...
            </div>
          )}
          <img
            className="Project-Logo"
            alt={`${name} project logo`}
            src={imageError ? defaultLogo : logoLink}
            onLoad={handleImageLoad}
            onError={handleImageError}
            style={{ display: imageLoading && !imageError ? 'none' : 'block' }}
          />
          <p className="Card-Title">{name}</p>
        </div>
        <div className="Card-Body">
          {tags.length > 0 && <div className="Card-Tag">{tags}</div>}
          <div className="Card-Description">
            <p>{description}</p>
          </div>
        </div>
        <div 
          className={`Card-Link ${buttonState}`}
          onClick={handleButtonClick}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              handleButtonClick(e);
            }
          }}
          aria-label={`View ${name} project`}
        >
          {getButtonContent()}
        </div>
      </a>
    </div>
  );
};

export default Card;

