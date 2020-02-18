import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../static/sass/mywork.scss";
import pc from "../static/image/work/pc.png";
import famimanage from "../static/image/work/famimanage.png";
import image_processing from "../static/image/work/image_processing.png";

const works = [
  {
    id: 0,
    src: famimanage,
    alt: "famimanage",
    overView:
      "アルバイトをしているファミリーマートの廃棄管理を簡易的にweb上で行えるようにしたものです。",
    language: "Ruby (Ruby on Rails)",
    url: "https://famimanage.herokuapp.com/"
  },
  {
    id: 1,
    src: image_processing,
    alt: "image_processing",
    overView:
      "研究室の授業でC言語を用いて行っていた画像処理をC#を用いて行ってみたもの。",
    language: "C_sharp",
    url: "https://github.com/date17/ImageChange"
  }
];

class MyWork extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: works[0].id,
      title: works[0].alt,
      src: works[0].src,
      alt: works[0].alt,
      overView: works[0].overView,
      language: works[0].language,
      url: works[0].url
    };
    this.slideBack = this.slideBack.bind(this);
    this.slideNext = this.slideNext.bind(this);
  }

  //前の成果物を表示
  slideBack() {
    //現在表示している成果物のidを変数に格納
    let now_id = this.state.id * 1;
    //idを用いてひとつ前の成果物をステートに保管
    let back_id = now_id - 1;
    if (back_id < 0) {
      this.setState({
        id: works[now_id].id,
        title: works[now_id].alt,
        src: works[now_id].src,
        alt: works[now_id].alt,
        overView: works[now_id].overView,
        language: works[now_id].language,
        url: works[now_id].url
      });
    } else {
      this.setState({
        id: works[back_id].id,
        title: works[back_id].alt,
        src: works[back_id].src,
        alt: works[back_id].alt,
        overView: works[back_id].overView,
        language: works[back_id].language,
        url: works[back_id].url
      });
    }
  }

  //次の成果物を表示
  slideNext() {
    //現在表示している成果物のidを変数に格納
    let now_id = this.state.id * 1;
    //idを用いてひとつ後の成果物をステートに保管
    let next_id = now_id + 1;
    if (next_id > works.length - 1) {
      this.setState({
        id: works[now_id].id,
        title: works[now_id].alt,
        src: works[now_id].src,
        alt: works[now_id].alt,
        overView: works[now_id].overView,
        language: works[now_id].language,
        url: works[now_id].url
      });
    } else {
      this.setState({
        id: works[next_id].id,
        title: works[next_id].alt,
        src: works[next_id].src,
        alt: works[next_id].alt,
        overView: works[next_id].overView,
        language: works[next_id].language,
        url: works[next_id].url
      });
    }
  }
  render() {
    return (
      <div className="mywork">
        <div className="page-title">
          <div className="en">DELIVERABLE</div>
          <div className="ja">成果物</div>
        </div>
        <div className="slide">
          <div className="back">
            {!(this.state.id <= 0) && (
              <FontAwesomeIcon
                icon={["fas", "angle-double-left"]}
                onClick={this.slideBack}
              />
            )}
          </div>
          <div className="slide-now">{this.state.title}</div>
          <div className="next">
            {!(this.state.id >= works.length - 1) && (
              <FontAwesomeIcon
                icon={["fas", "angle-double-right"]}
                onClick={this.slideNext}
              />
            )}
          </div>
        </div>
        <div className="works">
          <div className="desktop">
            <img src={pc} alt="pc" className="desktop-icon" />
          </div>
          <div className="work-img">
            <img
              src={this.state.src}
              alt={this.state.alt}
              className="work-img-icon"
            />
          </div>
          <div className="experience">
            <div className="experience-title">EXPERIENCE</div>
            <div className="title">
              <div className="start-tag">
                <FontAwesomeIcon icon={["fas", "angle-left"]} />
                TITLE
                <FontAwesomeIcon icon={["fas", "angle-right"]} />
              </div>
              <div className="main">{this.state.title}</div>
              <div className="end-tag">
                <FontAwesomeIcon icon={["fas", "angle-left"]} />
                /TITLE
                <FontAwesomeIcon icon={["fas", "angle-right"]} />
              </div>
            </div>
            <div className="over-view">
              <div className="start-tag">
                <FontAwesomeIcon icon={["fas", "angle-left"]} />
                OVERVIEW
                <FontAwesomeIcon icon={["fas", "angle-right"]} />
              </div>
              <div className="main">{this.state.overView}</div>
              <div className="end-tag">
                <FontAwesomeIcon icon={["fas", "angle-left"]} />
                /OVERVIEW
                <FontAwesomeIcon icon={["fas", "angle-right"]} />
              </div>
            </div>
            <div className="language">
              <div className="start-tag">
                <FontAwesomeIcon icon={["fas", "angle-left"]} />
                LANGUAGE
                <FontAwesomeIcon icon={["fas", "angle-right"]} />
              </div>
              <div className="main">{this.state.language}</div>
              <div className="end-tag">
                <FontAwesomeIcon icon={["fas", "angle-left"]} />
                /LANGUAGE
                <FontAwesomeIcon icon={["fas", "angle-right"]} />
              </div>
            </div>
            <div className="url">
              <div className="start-tag">
                <FontAwesomeIcon icon={["fas", "angle-left"]} />
                URL
                <FontAwesomeIcon icon={["fas", "angle-right"]} />
              </div>
              <div className="main">
                <a
                  href={this.state.url}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {this.state.url}
                </a>
              </div>
              <div className="end-tag">
                <FontAwesomeIcon icon={["fas", "angle-left"]} />
                /URL
                <FontAwesomeIcon icon={["fas", "angle-right"]} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MyWork;
