import React, { Component } from "react";
import awspic from "../img/AWSDEV.png";

class Skills extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="condiv skills">
        <h1 className="subtopic">My Skills</h1>
        <ul></ul>
        {/* <img src={awspic} className="widecard"></img> */}
      </div>
    );
  }
}

export default Skills;
