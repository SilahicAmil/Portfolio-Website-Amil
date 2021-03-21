import React, { Component } from "react";
import ReactTypingEffect from "react-typing-effect";
import profilepic from "../img/Amil-Silahic.jpg";
import Social from "../components/Social";

class Home extends Component {
  render() {
    return (
      <div className="condiv home">
        <img className="profilepic"></img>
        <ReactTypingEffect
          className="typingeffect"
          text={["Amil Silahic", "I am a Junior Web Developer"]}
          speed={150}
          eraseDelay={300}
          typingDelay={200}
          color="white"
        />
        <Social />
      </div>
    );
  }
}

export default Home;
