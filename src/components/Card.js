import React from "react";
import "./Card.css";

function Card({ title, height, width }) {
  return (
    <div
      className="card"
      style={{
        height: `${height}px`,
        width: `${width}px`,
      }}
    >
      <h3>{title}</h3>
    </div>
  );
}

export default Card;
