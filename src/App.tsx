import React from "react";
import "./App.css";
import Data from "./static/data.json";

function App() {
  return (
    <div className="App">
      <div className="container">
        {Data.map((item) => {
          return <div className="col">{item.title}</div>;
        })}
      </div>
    </div>
  );
}

export default App;
