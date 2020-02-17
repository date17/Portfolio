import React, { Component } from "react";
import MyInfo from "./myinfo";
import MyStudy from "./mystudy";
import MySkill from "./myskill";
import MyWork from "./mywork";
import "../static/sass/content.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navi from "./navi";

class Content extends Component {
  //   constructor(props) {
  //     super(props);
  //   }

  render() {
    return (
      <div>
        <Navi />
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={MyInfo} />
            <Route exact path="/study" component={MyStudy} />
            <Route exact path="/skill" component={MySkill} />
            <Route exact path="/work" component={MyWork} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default Content;
