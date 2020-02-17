import React, { Component } from "react";
import "../static/sass/levelbar.scss";

class LevelBar extends Component {
  //引数の属性から10段階のlevelを格納したlevel属性を取得
  //*1をして数値として扱う（後の繰り返しのため）
  level = this.props.level * 1;
  //iconのカラーを属性から受け取る
  color = this.props.color;
  //levelbarの対象である言語の名前を属性から受け取る
  name = this.props.name;

  //レベルのバーの背景のスタイル
  bar_style = {
    display: "inline-block",
    width: "10%",
    height: "30px",
    margin: "0",
    border: "1px solid gray",
    boxSizing: "border-box",
    backgroundColor: this.props.color
  };

  bar_style_no = {
    display: "inline-block",
    width: "10%",
    height: "30px",
    margin: "0",
    border: "1px solid gray",
    boxSizing: "border-box",
    backgroundColor: "#fff"
  };

  levelSet() {
    let bar = [];
    for (let i = 0; i < 10; i++) {
      if (i < this.level) {
        bar.push(<div style={this.bar_style}></div>);
      } else {
        bar.push(<div style={this.bar_style_no}></div>);
      }
    }

    return bar;
  }

  render() {
    let bar = this.levelSet();
    return <div className="level-bar">{bar}</div>;
  }
}

export default LevelBar;
