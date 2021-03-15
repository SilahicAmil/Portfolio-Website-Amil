import React, { Component } from "react";
import Widecard from "../components/Widecard";

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
      </div>
    );
  }
}

export default Education;
