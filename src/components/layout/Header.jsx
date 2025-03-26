import React, { useContext, useEffect, useState } from "react";
import { NavigateContext } from "../../contexts/NavigateContext";
import { FaMagnifyingGlass } from "react-icons/fa6";

const Header = () => {
  const { audios, setAudioCopy } = useContext(NavigateContext);
  const [audioSearchQuery, setAudioSearchQuery] = useState("");

  useEffect(() => {
    if(audios.length !== 0) setAudioCopy(audios.filter(({ title }) => title.toLowerCase().includes(audioSearchQuery)));
  }, [audioSearchQuery, audios, setAudioCopy]);

  return (
    <header id="header">
      <h1 id="logo">AkinMusic</h1>
      <div id="search-div">
        <FaMagnifyingGlass className="search-icon" />
        <input type="text" id="search-input" value={audioSearchQuery} onChange={(e) => setAudioSearchQuery(e.target.value)} placeholder="Search by songs, aphabetically." />
      </div>
      <button type="button" id="account-button">AS</button>
    </header>
  );
};

export default Header;
