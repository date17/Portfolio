import React, { Component } from "react";
import Layout from "./components/layout";
import Content from "./components/content";
// Fontawesomeを使用
import { library } from "@fortawesome/fontawesome-svg-core"; //fontawesomeのコアファイル
import { fab } from "@fortawesome/free-brands-svg-icons"; //fontawesomeのbrandアイコンのインポート
import { fas } from "@fortawesome/free-solid-svg-icons"; //fontawesomeのsolidアイコンのインポート
import { far } from "@fortawesome/free-regular-svg-icons"; //fontawesomeのregularアイコンのインポート

//他のコンポーネントから簡単に呼び出せるようにするための登録処理？
library.add(fab, fas, far);

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
