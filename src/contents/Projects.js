import React, { Component } from "react";
import awspic from "../img/AWSDEV.png";
import Widecard from "../components/Widecard";

class Projects extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="condiv projects">
        <h1 className="subtopic">My Projects</h1>
        <div>
          <h1>***WORK IN PROGRESS***</h1>
        </div>
        <div className="projectsContainer">
          <div className="grid-1">
            a<a>A</a>
          </div>
          <div className="grid-2">b</div>
          <div className="grid-3">c</div>
          <div className="grid-4">d</div>
        </div>
      </div>
    );
  }
}

export default Projects;
