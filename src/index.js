import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
import Home from "./pages/home";
import { PlayContextDiv } from "./pages/navigate";


const Default = () => {

  return (
    <PlayContextDiv>
      <Home/>
    </PlayContextDiv>
  );
};

ReactDOM.render(<Default />, document.getElementById("root"));