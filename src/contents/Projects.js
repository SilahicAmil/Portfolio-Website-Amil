import React, { Component } from "react";
import awspic from "../img/AWSDEV.png";
import Widecard from "../components/Widecard";
import yelpcamp from "../img/backgroundYelpCamp.jpg";

class Projects extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="condiv projects">
        <h1 className="subtopic">My Projects</h1>
        <section className="Projects">
          <div className="Projects1">
            <ul className="grid">
              <li>
                <a
                  href="https://protected-thicket-27318.herokuapp.com/"
                  target="_blank"
                >
                  <img src={yelpcamp} alt=""></img>
                </a>
                <h3>
                  Full Stack Website. Created with HTML, CSS, Javascript,
                  Node.js, MongoDB, Express, Passport.
                </h3>
              </li>
              <li>
                <a href="" target="_blank">
                  <img src={awspic} alt=""></img>
                </a>
                AWS Certified Developer
              </li>
            </ul>
          </div>
        </section>
      </div>
    );
  }
}

export default Projects;
