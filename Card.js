// Card.js
import React from "react";

const Card = ({ imgSrc, title, text }) => {
  return (
    <div className="card">
      <img src={imgSrc} alt={title} />
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
};

export default Card;
