import React, { useState } from "react";
<<<<<<< HEAD
import { BounceLoader } from "react-spinners"; // Import BounceLoader
=======
import { BarLoader } from "react-spinners"; // Import a loader like BarLoader
>>>>>>> 65b3ced727330eef1749d4feb7e1871fa25c823e
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
<<<<<<< HEAD
      <a className="Card-Real-Link" href={projectLink} target="_blank" rel="noopener noreferrer">
        <div className="Card-Header">
          <div className="Image-Wrapper">
            {/* Show BounceLoader while the image is loading */}
            {loading && <BounceLoader color={"#123abc"} loading={loading} size={60} />} {/* Adjust size as needed */}
=======
      <a className="Card-Real-Link" href={projectLink} target="blank">
        <div className="Card-Header">
          <div className="Image-Wrapper">
            {/* Show spinner while the image is loading */}
            {loading && <BarLoader color={"#123abc"} loading={loading} />}
>>>>>>> 65b3ced727330eef1749d4feb7e1871fa25c823e
            
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
