import React from "react";

import ReactDom from "react-dom";

import Demo from "./pages/demo";

function App() {
  return (
    <div>
      <p>hello, world</p>
      <Demo />
    </div>
  );
}

ReactDom.render(<App />, document.getElementById("app"));
