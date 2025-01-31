import React, { useState, useRef, useEffect, useContext } from "react";
import { FaForwardStep, FaBackwardStep, FaPause, FaPlay, FaShuffle, FaAngleUp } from "react-icons/fa6";
import { NavigateContext } from "../../services/contexts/NavigateContext";

const Footer = () => {
  const { setShowMusicDetails } = useContext(NavigateContext);
  const [musicTime, setMusicTime] = useState(0);
  const audioInput = useRef(null);

  useEffect(() => {
    audioInput.current.style.setProperty("--fill", `${(musicTime / 100) * 100}%`);
  }, [musicTime]);

  return (
    <footer id="footer">
      <FaAngleUp onClick={() => setShowMusicDetails(true)} className="control-button" id="music-display-details-icon" />
      <div id="iconDiv">
        <FaBackwardStep className="control-button" />
        <div id="play-pause-button-div" className="control-button">
          {true ? <FaPlay /> : <FaPause />}
        </div>
        <FaForwardStep className="control-button" />
      </div>
      <div id="music-duration-div">
        <input type="range" name="playRange" ref={audioInput} min="0" max="100" value={musicTime} onChange={(e) => setMusicTime(e.target.value)} id="playingTime" />
        <div id="music-time">
          <p>{true ? "2:75" : "-"}</p> <span className="music-time-divider">+</span> <p>{true ? "3:56" : "-"}</p>
        </div>
      </div>
      <FaShuffle className="control-button" id="music-shuffle-icon" />
    </footer>
  );
};

export default Footer;
