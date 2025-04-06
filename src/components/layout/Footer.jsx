import React, { useState, useRef, useEffect, useContext } from "react";
import { FaForwardStep, FaBackwardStep, FaPause, FaPlay, FaShuffle, FaAngleUp } from "react-icons/fa6";
import { NavigateContext } from "../../contexts/NavigateContext";
import { useAudioControl } from "../../hooks/useAudioControl";

const Footer = () => {
  const { setShowMusicDetails, audioPlayerRef, audioStatus, audioShuffle, audioDuration, setAudioDuration, musicTime, setAudioShuffle, currentAudio: { link, duration } } = useContext(NavigateContext);
  const { updateAudioStatus, audioControl } = useAudioControl();
  const audioDurationRef = useRef(null);

  const [audioState, setAudioState] = useState(false);
  useEffect(() => {
    setAudioState(false);
    audioDurationRef.current.style.setProperty("--fill", `${(musicTime / (duration || 1)) * 100}%`);
    if (musicTime) setAudioDuration({ minute: Math.floor(musicTime / 60), seconds: musicTime % 60 }); 
    if (musicTime === duration) setAudioState(true);
  }, [musicTime]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (audioState) audioControl("NEXT");
    }, 500);
    return () => clearTimeout(timeout);
  }, [audioState]);


  return (
    <footer id="footer">
      <FaAngleUp onClick={() => setShowMusicDetails(true)} className="control-button" id="music-display-details-icon" />
      <div id="iconDiv">
        <FaBackwardStep onClick={() => audioControl("PREV")} className="control-button" />
        <div id="play-pause-button-div" className="control-button">
          {audioStatus.status ? <FaPause onClick={() => updateAudioStatus(true)} /> : <FaPlay onClick={() => updateAudioStatus(false)} /> }
        </div>
        <FaForwardStep onClick={() => audioControl("NEXT")} className="control-button" />
      </div>
      <audio src={link} ref={audioPlayerRef} controlsList="nodownload" hidden />
      <div id="music-duration-div">
        <div ref={audioDurationRef} id="playingTime" />
        <div id="music-time">
          <p>{duration ? `${audioDuration.minute}:${audioDuration.seconds < 10 ? `0${audioDuration.seconds}` : audioDuration.seconds}` : "--:--"}</p> <span className="music-time-divider">/</span> <p>{duration ? `${Math.floor(duration / 60)}:${duration % 60}` : "--:--"}</p>
        </div>
      </div>
      <FaShuffle style={{ color: audioShuffle ? "#32CD32" : "white" }} onClick={() => setAudioShuffle(e => !e)} className="control-button" id="music-shuffle-icon" />
    </footer>
  );
};

export default Footer;
