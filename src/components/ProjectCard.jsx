// src/components/ProjectCard.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProjectCard = ({ title, description, image, link }) => {
  return (
    <div className="card m-3" style={{ width: '18rem' }}>
      <img src={image} className="card-img-top" alt={`${title} Thumbnail`} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <a href={link} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
          View Project
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
