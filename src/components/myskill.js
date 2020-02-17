import React, { Component } from "react";
import LevelBar from "./levelbar";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../static/sass/myskill.scss";
// 言語のiconをインポートしておく
import c from "../static/image/c.svg";
import c_sharp from "../static/image/c-sharp.svg";
import css3 from "../static/image/css-3.svg";
import html5 from "../static/image/html-5.svg";
import js from "../static/image/javascript.svg";
import react from "../static/image/react.svg";
import php from "../static/image/php.svg";
import laravel from "../static/image/laravel.svg";
import ruby from "../static/image/ruby.svg";
import rails from "../static/image/rails.svg";

class MySkill extends Component {
  //   constructor(props) {
  //     super(props);
  //   }

  language = [
    {
      src: c,
      alt: "C",
      level: 5,
      color: "#a9b9cb"
    },
    {
      src: c_sharp,
      alt: "C_sharp",
      level: 3,
      color: "#a179dc"
    },
    {
      src: css3,
      alt: "CSS3",
      level: 5,
      color: "#264de4"
    },
    {
      src: html5,
      alt: "HTML5",
      level: 5,
      color: "#e44d31"
    },
    {
      src: js,
      alt: "Javascript",
      level: 4,
      color: "#f7df31"
    },
    {
      src: react,
      alt: "React",
      level: 4,
      color: "#61d9fb"
    },
    {
      src: php,
      alt: "PHP",
      level: 5,
      color: "#6181b6"
    },
    {
      src: laravel,
      alt: "Laravel",
      level: 5,
      color: "#e93f33"
    },
    {
      src: ruby,
      alt: "Ruby",
      level: 3,
      color: "#d64c37"
    },
    {
      src: rails,
      alt: "Rails",
      level: 3,
      color: "#ce362c"
    }
  ];

  skillList() {
    let skill_list = [];
    for (let i = 0; i < this.language.length; i++) {
      skill_list.push(
        //classNameを複数指定する時は、まとめてひとつにする
        <div className="icon">
          <div className={this.language[i].alt}>{this.language[i].alt}</div>
          <img src={this.language[i].src} alt={this.language[i].alt} />
          <LevelBar
            level={this.language[i].level}
            color={this.language[i].color}
            name={this.language[i].alt}
          />
        </div>
      );
    }
    return skill_list;
  }
  render() {
    let skills = this.skillList();
    return (
      <div className="myskill">
        <div className="title">
          <div className="en">SKILLS</div>
          <div className="ja">スキル</div>
        </div>
        <div className="skills">{skills}</div>
      </div>
    );
  }
}

export default MySkill;
