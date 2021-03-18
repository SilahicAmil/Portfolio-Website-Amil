import React, { Component } from "react";
import awspic from "../img/AWSDEV.png";

class Widecard extends Component {
  render() {
    return (
      <div class="widecard">
        <div class="compdet">
          <h3>{this.props.title}</h3>
          <h4 class="secondtext">{this.props.where}</h4>
          <h4 class="secondtext">
            {this.props.from} - {this.props.to}
          </h4>
          <h4 class="img">{this.props.img}</h4>
        </div>
      </div>
    );
  }
}

export default Widecard;
