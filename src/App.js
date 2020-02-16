import { React, Component } from "react";
import "App.css";
import Layout from "./components/layout";
import Content from "./components/content";

class App extends Component {
  render() {
    return (
      <Layout>
        <Content />
      </Layout>
    );
  }
}

export default App;
