import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ResumePage = () => {
  return (
    <div>
      <div className="d-flex p-2 justify-content-center">
        <h1>Resume</h1>
      </div>
      <div className="formStyle">
      <p>Please download my <a href="">resume</a></p>
        <ul>
          <h3>Front-end Proficiencies</h3>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>jQuery</li>
          <li>Responsive Design</li>
          <li>React</li>
          <li>Bootstrap</li>
        </ul>
        <ul>
          <h3>Back-end Proficiencies</h3>
          <li>APIs</li>
          <li>Node</li>
          <li>Express</li>
          <li>mySQL Sequilize</li>
          <li>MongoDB, Mongoose</li>
          <li>REST</li>
          <li>GraphQL</li>
        </ul>
      </div>
    </div>
  );
};

export default ResumePage;
