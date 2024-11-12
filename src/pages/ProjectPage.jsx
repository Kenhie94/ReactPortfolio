// src/pages/ProjectPage.js
import React from 'react';
import ProjectCard from '../components/ProjectCard';

const ProjectPage = () => {
  // Array of project data
  const projects = [
    {
      title: 'Surf Mern',
      description: 'Description of Project One.',
      image: 'Surf_Mern.jpg',
      link: '#'
    },
    {
      title: 'Project Two',
      description: 'Description of Project Two.',
      image: 'https://via.placeholder.com/150',
      link: '#'
    },
    {
      title: 'Project Three',
      description: 'Description of Project Three.',
      image: 'https://via.placeholder.com/150',
      link: '#'
    },
    {
      title: 'Project Four',
      description: 'Description of Project Four.',
      image: 'https://via.placeholder.com/150',
      link: '#'
    },
    {
      title: 'Project Five',
      description: 'Description of Project Five.',
      image: 'https://via.placeholder.com/150',
      link: '#'
    },
    {
      title: 'Project Six',
      description: 'Description of Project Six.',
      image: 'https://via.placeholder.com/150',
      link: '#'
    },
    // Add more projects as needed
  ];

  return (
    <div>
      <div className="d-flex p-2 justify-content-center">
        <h1>Projects</h1>
      </div>
      <div className="d-flex flex-wrap justify-content-center">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectPage;
