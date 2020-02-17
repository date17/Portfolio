import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../static/sass/mystudy.scss";

class MyStudy extends Component {
  render() {
    return (
      <div className="mystudy">
        <div className="title">
          <div className="en">STUDY HISTORY</div>
          <div className="ja">勉強履歴</div>
        </div>
        <div className="study-history">
          <div className="start-tag">
            <FontAwesomeIcon icon={["fas", "angle-left"]} />
            ul<span>className="STUDY HISTORY"</span>
            <FontAwesomeIcon icon={["fas", "angle-right"]} />
          </div>
          <div className="history-list">
            <div className="one-history">
              <div className="start-list-tag">
                <FontAwesomeIcon icon={["fas", "angle-left"]} />
                li<span>className="2019-01"</span>
                <FontAwesomeIcon icon={["fas", "angle-right"]} />
              </div>
              <div className="main">授業でJSPを用いたWEBページを作成</div>
              <div className="end-list-tag">
                <FontAwesomeIcon icon={["fas", "angle-left"]} />
                /li
                <FontAwesomeIcon icon={["fas", "angle-right"]} />
              </div>
            </div>
            <div className="one-history">
              <div className="start-list-tag">
                <FontAwesomeIcon icon={["fas", "angle-left"]} />
                li<span>className="2019-02"</span>
                <FontAwesomeIcon icon={["fas", "angle-right"]} />
              </div>
              <div className="main">C言語の復習</div>
              <div className="end-list-tag">
                <FontAwesomeIcon icon={["fas", "angle-left"]} />
                /li
                <FontAwesomeIcon icon={["fas", "angle-right"]} />
              </div>
            </div>
            <div className="one-history">
              <div className="start-list-tag">
                <FontAwesomeIcon icon={["fas", "angle-left"]} />
                li<span>className="2019-05"</span>
                <FontAwesomeIcon icon={["fas", "angle-right"]} />
              </div>
              <div className="main">独学でC#を学ぶ</div>
              <div className="end-list-tag">
                <FontAwesomeIcon icon={["fas", "angle-left"]} />
                /li
                <FontAwesomeIcon icon={["fas", "angle-right"]} />
              </div>
            </div>
            <div className="one-history">
              <div className="start-list-tag">
                <FontAwesomeIcon icon={["fas", "angle-left"]} />
                li<span>className="2019-07"</span>
                <FontAwesomeIcon icon={["fas", "angle-right"]} />
              </div>
              <div className="main">
                C#を用いた簡単なGUI画像処理アプリケーションを作成
              </div>
              <div className="end-list-tag">
                <FontAwesomeIcon icon={["fas", "angle-left"]} />
                /li
                <FontAwesomeIcon icon={["fas", "angle-right"]} />
              </div>
            </div>
            <div className="one-history">
              <div className="start-list-tag">
                <FontAwesomeIcon icon={["fas", "angle-left"]} />
                li<span>className="2019-08"</span>
                <FontAwesomeIcon icon={["fas", "angle-right"]} />
              </div>
              <div className="main">画像処理ライブラリOpenCVの勉強</div>
              <div className="end-list-tag">
                <FontAwesomeIcon icon={["fas", "angle-left"]} />
                /li
                <FontAwesomeIcon icon={["fas", "angle-right"]} />
              </div>
            </div>
            <div className="one-history">
              <div className="start-list-tag">
                <FontAwesomeIcon icon={["fas", "angle-left"]} />
                li<span>className="2019-09"</span>
                <FontAwesomeIcon icon={["fas", "angle-right"]} />
              </div>
              <div className="main">独学でRubyの勉強</div>
              <div className="end-list-tag">
                <FontAwesomeIcon icon={["fas", "angle-left"]} />
                /li
                <FontAwesomeIcon icon={["fas", "angle-right"]} />
              </div>
            </div>
            <div className="one-history">
              <div className="start-list-tag">
                <FontAwesomeIcon icon={["fas", "angle-left"]} />
                li<span>className="2019-10"</span>
                <FontAwesomeIcon icon={["fas", "angle-right"]} />
              </div>
              <div className="main">Ruby on Railsを勉強</div>
              <div className="end-list-tag">
                <FontAwesomeIcon icon={["fas", "angle-left"]} />
                /li
                <FontAwesomeIcon icon={["fas", "angle-right"]} />
              </div>
            </div>
            <div className="one-history">
              <div className="start-list-tag">
                <FontAwesomeIcon icon={["fas", "angle-left"]} />
                li<span>className="2019-11"</span>
                <FontAwesomeIcon icon={["fas", "angle-right"]} />
              </div>
              <div className="main">
                Ruby on Railsを用いてファミリーマートの廃棄管理WEBアプリを作成
                <br />
                PHPの勉強
              </div>
              <div className="end-list-tag">
                <FontAwesomeIcon icon={["fas", "angle-left"]} />
                /li
                <FontAwesomeIcon icon={["fas", "angle-right"]} />
              </div>
            </div>
            <div className="one-history">
              <div className="start-list-tag">
                <FontAwesomeIcon icon={["fas", "angle-left"]} />
                li<span>className="2019-12"</span>
                <FontAwesomeIcon icon={["fas", "angle-right"]} />
              </div>
              <div className="main">Laravelの勉強</div>
              <div className="end-list-tag">
                <FontAwesomeIcon icon={["fas", "angle-left"]} />
                /li
                <FontAwesomeIcon icon={["fas", "angle-right"]} />
              </div>
            </div>
            <div className="one-history">
              <div className="start-list-tag">
                <FontAwesomeIcon icon={["fas", "angle-left"]} />
                li<span>className="2020-01"</span>
                <FontAwesomeIcon icon={["fas", "angle-right"]} />
              </div>
              <div className="main">
                Laravelを用いたBookmark管理WEBアプリを作成
                <br />
                Javascriptの勉強
              </div>
              <div className="end-list-tag">
                <FontAwesomeIcon icon={["fas", "angle-left"]} />
                /li
                <FontAwesomeIcon icon={["fas", "angle-right"]} />
              </div>
            </div>
            <div className="one-history">
              <div className="start-list-tag">
                <FontAwesomeIcon icon={["fas", "angle-left"]} />
                li<span>className="2020-02"</span>
                <FontAwesomeIcon icon={["fas", "angle-right"]} />
              </div>
              <div className="main">
                React.jsの勉強
                <br />
                React.jsを用いたポートフォリオ作成
              </div>
              <div className="end-list-tag">
                <FontAwesomeIcon icon={["fas", "angle-left"]} />
                /li
                <FontAwesomeIcon icon={["fas", "angle-right"]} />
              </div>
            </div>
          </div>
          <div className="end-tag">
            <FontAwesomeIcon icon={["fas", "angle-left"]} />
            /ul
            <FontAwesomeIcon icon={["fas", "angle-right"]} />
          </div>
        </div>
      </div>
    );
  }
}

export default MyStudy;
