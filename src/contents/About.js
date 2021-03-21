import React, { Component } from "react";
import profilepic from "../img/Amil-Silahic.jpg";

class About extends Component {
  render() {
    return (
      <div className="condiv about-me">
        {/* <h1 className="subtopic ">About Me</h1> */}

        <img src={profilepic} alt="ProfilePic" className="profilePic"></img>

        <div className="about-me">
          <div className="about-me-header">
            <h4>Hey there,</h4>
            <h1>I'm Amil Silahic</h1>

            <h3>
              <u>Junior Web Developer</u>
            </h3>
          </div>

          <br></br>
          <div className="about-me-text">
            <p>
              I've been intrigued by technology ever since I was young. I was
              the IT before the IT guy, whenever the internet would go down or
              family had computer issues I was the one to fix it.
            </p>
            <br></br>
            <p>
              I am a Self Taught Web Developer, thanks to Udemy. Learning the
              ins and outs of Web Development. As well as enrolling in Udemy Pro
              for the, "AWS Certified Developer" course by Stephen Marek. For
              which I am now certified in! Since then I have kept up my skills
              and improving day by day.
            </p>
            <br></br>
            <p>
              I'm quietly confident, naturally curious, and always working on
              improving my skills one bug at a time. I believe with time and
              experience, I'll be able to become the best version of myself I
              can be
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
