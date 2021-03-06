import React, { Component } from "react";
import Header from "./header";
import Footer from "./footer";
import "../static/sass/layout.scss";

class Layout extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div>
        <Header />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default Layout;
