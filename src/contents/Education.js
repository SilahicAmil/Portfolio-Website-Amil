import React, { Component } from "react";
import Widecard from "../components/Widecard";
import awspic from "../img/AWSDEV.png";

class Education extends Component {
  render() {
    return (
      <div className="condiv">
        <h1 className="subtopic">My Education</h1>
        <Widecard
          title="AWS Certified Developer - Associate"
          from="2021"
          to="2024"
        />

        <Widecard title="Google IT Support Proffesional" from="2019" to="" />
      </div>
    );
  }
}

export default Education;
