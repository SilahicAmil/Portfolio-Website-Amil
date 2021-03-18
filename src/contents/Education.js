import React, { Component } from "react";
import Widecard from "../components/Widecard";
import awspic from "../img/AWSDEV.png";

class Education extends Component {
  render() {
    return (
      <div className="condiv">
        <h1 className="subtopic">My Education</h1>
        <Widecard
          title="High School"
          where="Cyprus High School"
          from="2015"
          to="2019"
        />
        <Widecard
          title="AWS Certified Developer - Associate"
          from="2021"
          to="2024"
          img=<img src={awspic} className="widecard"></img>
        />
      </div>
    );
  }
}

export default Education;
