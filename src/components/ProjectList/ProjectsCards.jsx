import React from "react";
import "./css/project-cards.css";

const defaultImage ="/Loading-image.png"

const Card = ({
  projectLink,
  logoLink,
  name,
  description,
  tags: propsTags,
}) => {
  let tags = [];

  if (propsTags) {
    tags = propsTags.map((tag, key) => (
      <div key={key}>
        <p>{tag}</p>
      </div>
    ));
  }

  return (
    <div className="Card-Container">
      <a className="Card-Real-Link" href={projectLink} target='blank'>
        <div className="Card-Header">
        <img
            className="Project-Logo"
            alt={logoLink}
            src={logoLink}
            onError={(e) => {
              e.target.onerror = null; // Prevents infinite loop if fallback also fails
              e.target.src = defaultImage; // Set default image if loading fails
            }}
            />
          <p className="Card-Title">{name}</p>
        </div>
        <div className="Card-Body">
          <div className="Card-Tag">{tags}</div>
          <div className="Card-Description">
            <p> {description}</p>
          </div>
        </div>
        <div className="Card-Link">Go to Project</div>
      </a>
    </div>
  );
};

export default Card;
