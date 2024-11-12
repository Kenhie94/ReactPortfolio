import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/ProjectCard.css'; // Import the custom CSS
import '../styles/App.css'

const ProjectCard = ({ title, description, image, link }) => {
  return (
    <div className="custom-card m-3 aboutMeBorder1 border border-sm border-success">
      <div className="image-container">
        <img src={image} className="card-img" alt={`${title} Thumbnail`} />
        <div className="overlay">
          <h5 className="overlay-title">{title}</h5>
          <p className="overlay-description">{description}</p>
        </div>
      </div>
      <div className="card-footer">
        <a href={link} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
          View Project
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
