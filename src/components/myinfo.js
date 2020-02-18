import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../static/sass/myinfo.scss";
import face from "../static/image/face.JPG";
class MyInfo extends Component {
  render() {
    return (
      <div className="introduction">
        <div className="title">
          <div className="en">SELF INTRODUCTION</div>
          <div className="js">自己紹介</div>
        </div>
        <div className="info">
          <div className="face-image">
            <img src={face} alt="my-face" />
          </div>
          <div className="about">
            <div className="name">
              <div className="start-tag">
                <FontAwesomeIcon icon={["fas", "angle-left"]} />
                <span>NAME</span>
                <FontAwesomeIcon icon={["fas", "angle-right"]} />
              </div>
              <div className="main">MINAMIDATE TAKUYA</div>
              <div className="end-tag">
                <FontAwesomeIcon icon={["fas", "angle-left"]} />/
                <span>NAME</span>
                <FontAwesomeIcon icon={["fas", "angle-right"]} />
              </div>
            </div>
            <div className="birth">
              <div className="start-tag">
                <FontAwesomeIcon icon={["fas", "angle-left"]} />
                <span>BIRTH</span>
                <FontAwesomeIcon icon={["fas", "angle-right"]} />
              </div>
              <div className="main">1998/12/2</div>
              <div className="end-tag">
                <FontAwesomeIcon icon={["fas", "angle-left"]} />/
                <span>BIRTH</span>
                <FontAwesomeIcon icon={["fas", "angle-right"]} />
              </div>
            </div>
            <div className="university">
              <div className="start-tag">
                <FontAwesomeIcon icon={["fas", "angle-left"]} />
                <span>UNIVERSITY</span>
                <FontAwesomeIcon icon={["fas", "angle-right"]} />
              </div>
              <div className="main">IWATE PREFECTUAL UNIVERSITY</div>
              <div className="end-tag">
                <FontAwesomeIcon icon={["fas", "angle-left"]} />/
                <span>UNIVERSITY</span>
                <FontAwesomeIcon icon={["fas", "angle-right"]} />
              </div>
            </div>
            <div className="hobby">
              <div className="start-tag">
                <FontAwesomeIcon icon={["fas", "angle-left"]} />
                <span>HOBBY</span>
                <FontAwesomeIcon icon={["fas", "angle-right"]} />
              </div>
              <div className="main">SOCCER, GAME, etc...</div>
              <div className="end-tag">
                <FontAwesomeIcon icon={["fas", "angle-left"]} />/
                <span>HOBBY</span>
                <FontAwesomeIcon icon={["fas", "angle-right"]} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MyInfo;
