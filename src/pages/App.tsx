import React from "react";

import ClassExample from "../components/ClassExample";
import FunctionalExample from "../components/FunctionalExample";

import logo from "../logo.svg";
import "../styles/App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      {/* <ClassExample /> */}
      <FunctionalExample />
    </div>
  );
}

export default App;
