import React from 'react';
import ProjectCard from '../components/ProjectCard';

const ProjectPage = () => {
  // Array of project data
  const projects = [
    {
      title: 'Yelp Camp',
      description: 'Express/MongoDB/JavaScript',
      image: 'YelpCamp.png',
      link: '#'
    },
    {
      title: 'Birdle',
      description: 'HTML/Bootstrap/JavaScript',
      image: 'Birdle_Page_2.jpg',
      link: '#'
    },
    {
      title: 'Surf Report',
      description: 'Mern Stack',
      image: 'Surf_Mern.jpg',
      link: '#'
    },
    {
      title: 'Calculator',
      description: 'React/JavaScript/CSS',
      image: 'Calculator.jpg',
      link: '#'
    },
    {
      title: 'LED Wall',
      description: 'Node/IoT',
      image: 'LEDWall.jpg',
      link: '#'
    },
    {
      title: 'Pastel Puzzle',
      description: 'Mern Stack',
      image: 'Pastel_Puzzle.jpg',
      link: '#'
    },

  ];

  return (
    <div>
      <div className="d-flex p-2 justify-content-center">
        <h1>Projects</h1>
      </div>
      <div className="d-flex flex-wrap justify-content-center pb-3">
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
