import React from "react";
import "./Projectcard.css";
import { Link } from "react-router-dom";

function ProjectCard({ card }) {
  const { img, pp, cat, username } = card; // Destructure 'card' prop

  return (
    <Link to={`/project/${card.id}`} className="link"> {/* Update 'to' attribute */}
      <div className="projectCard">
        <img src={img} alt="" />
        <div className="info">
          <img src={pp} alt="" />
          <div className="texts">
            <h2>{cat}</h2>
            <span>{username}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ProjectCard;





/*
import React from "react";
import "./Projectcard.css";
import { Link } from "react-router-dom";

function ProjectCard({ card }) {
  return (
    <Link to='/' className="link">
    <div className="projectCard">
      <img src={item.img} alt="" />
      <div className="info">
        <img src={item.pp} alt="" />
        <div className="texts">
          <h2>{item.cat}</h2>
          <span>{item.username}</span>
        </div>
      </div>
    </div>
    </Link>
  );
}

export default ProjectCard;
//*/