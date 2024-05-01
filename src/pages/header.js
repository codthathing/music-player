import React, { useState } from "react";

const Header = () => {

  const [input, setInput] = useState({ folder: "" });
  const handInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInput({ ...input, [name]: value });
  };

  return (
    <header id="header">
      <nav id="headerNav">
        <h1 id="logo">AkinMusic</h1>
        <section id="bottomHead">
          <div id="folDiv">
            <input type="file" name="folder" value={input.folder} onChange={handInput} hidden id="musFol" />
            <i className="fa-solid fa-bars icons" id="folIcon" style={{ color: "#ffffff" }}></i>
            <span id="folName">SD Card</span>
            {/* <i id="selIcon" class="icons">j</i> */}
          </div>
          <i className="fa-solid fa-magnifying-glass icons" id="searchIcon" style={{ color: "#ffffff" }}></i>
        </section>
      </nav>
    </header>
  );
};

export default Header;