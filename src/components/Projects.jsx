import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

const Projects = () => {
  const projectList = [
    { name: 'Project 1', description: 'Description about project 1' },
    { name: 'Projteect 2', description: 'Description about project 2' }
  ];

  return (
    <section id='projects' class=''>
      <h2>Projects</h2>
      <ul>
        {projectList.map((project, index) => (
          <li key={index}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Projects;