import React from "react";
import "./App.css";
import copy from "copy-to-clipboard";

function App() {
  return (
    <>
      <button onClick={() => copy("hoge")}>hoge</button>
    </>
  );
}

export default App;
