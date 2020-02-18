import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="github">
          <a
            href="https://github.com/date17"
            target="_blank"
            rel="noreferrer noopener"
          >
            <FontAwesomeIcon icon={["fab", "github-square"]} />
          </a>
        </div>
        <div className="copyright">©︎ 2020 kuromame.</div>
      </footer>
    );
  }
}

//外部から利用できるようにする
export default Footer;
