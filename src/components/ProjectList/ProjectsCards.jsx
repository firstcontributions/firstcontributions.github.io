import React from "react";
import "./css/project-cards.css";

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
      <a className="Card-Real-Link" href={projectLink} target='_blank'>
        <div className="Card-Header">
          <img
            className="Project-Logo"
            alt="the framework or language that the project is build upon"
            src={logoLink}
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
