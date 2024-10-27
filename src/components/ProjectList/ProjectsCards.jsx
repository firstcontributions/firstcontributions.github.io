import React, { useState } from "react";
import { BounceLoader } from "react-spinners"; // Import BounceLoader
import "./css/project-cards.css";

const Card = ({ projectLink, logoLink, name, description, tags: propsTags }) => {
  const [loading, setLoading] = useState(true); // State to track image loading

  const handleImageLoad = () => {
    setLoading(false); // Set loading to false when the image is fully loaded
  };

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
      <a className="Card-Real-Link" href={projectLink} target="_blank" rel="noopener noreferrer">
        <div className="Card-Header">
          <div className="Image-Wrapper">
            {/* Show BounceLoader while the image is loading */}
            {loading && <BounceLoader color={"#123abc"} loading={loading} size={60} />} {/* Adjust size as needed */}
            
            {/* Image element with onLoad handler */}
            <img
              className="Project-Logo"
              alt="the framework or language that the project is built upon"
              src={logoLink}
              onLoad={handleImageLoad} // Call handleImageLoad when image is loaded
              style={loading ? { display: "none" } : {}} // Hide image until loaded
            />
          </div>
          <p className="Card-Title">{name}</p>
        </div>
        <div className="Card-Body">
          <div className="Card-Tag">{tags}</div>
          <div className="Card-Description">
            <p>{description}</p>
          </div>
        </div>
        <div className="Card-Link">Go to Project</div>
      </a>
    </div>
  );
};

export default Card;
