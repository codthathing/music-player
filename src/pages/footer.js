import React, { useContext } from "react";
import { PlayContext } from "./navigate";

const Footer = () => {

  const { currentAudio } = useContext(PlayContext);

  return (
    <footer id="footer">
      <div id="mainPlayer">
        <audio src={currentAudio.songLink} type="audio/mpeg" id="audioMain"></audio>
        <aside id="mainControlDisplay">
          <div id="nameRange">
            <cite id="playingAudioName">{currentAudio.songName}</cite>
            <div id="timeDiv">
              <span id="startTime" className="playTime">-+-</span>
              <input type="range" name="playRange" id="playingTime" />
              <span id="endTime" className="playTime">-+-</span>
            </div>
          </div>
          <div id="iconDiv">
            <i className="fa-solid fa-caret-left prevAudio controlIconsMove" style={{ color: "#ffffff" }}></i>
            <i className="fa-solid fa-circle-play playAudio controlIcons" style={{ color: "#ffffff" }}></i>
            <i className="fa-solid fa-caret-right nextAudio controlIconsMove" style={{ color: "#ffffff" }}></i>
          </div>
        </aside>
      </div>
    </footer>
  );
};

export default Footer;