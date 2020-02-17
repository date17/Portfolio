import React, { Component } from "react";
import "../static/sass/navi.scss";

class Navi extends Component {
  render() {
    return (
      <div className="navi">
        <div className="info">
          <a href="/">
            <span>INTRODUCTION</span>
          </a>
        </div>
        <div className="study">
          <a href="/study">
            <span>STUDY</span>
          </a>
        </div>
        <div className="skill">
          <a href="skill">
            <span>SKILL</span>
          </a>
        </div>
        <div className="work">
          <a href="work">
            <span>DELIVERABLE</span>
          </a>
        </div>
      </div>
    );
  }
}

export default Navi;
