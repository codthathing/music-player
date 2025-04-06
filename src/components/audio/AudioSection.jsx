import React, { useContext, useEffect, useState } from "react";
import { NavigateContext } from "../../contexts/NavigateContext";
import { MdForward10, MdReplay5 } from "react-icons/md";
import { FaAngleDown } from "react-icons/fa6";
import AudioLoading from "./AudioLoading";
import AudioTemplate from "./AudioTemplate";

const AudioSection = () => {
  const { showMusicDetails, setShowMusicDetails, audioCopy, audioStatus, audioPlayerRef, currentAudio: { picture, title, artist, duration } } = useContext(NavigateContext);
  
  const forBackWardAudio = (seconds) => {
    if (!audioStatus.no_audio) {
      const newAudioMinute = audioPlayerRef.current.currentTime + seconds;
      audioPlayerRef.current.currentTime = Math.max(0, Math.min(newAudioMinute, duration));
    };
  };

  const [windowWidth, setWindowWidth] = useState(false);
  useEffect(() => {
    setWindowWidth(window.innerWidth < 768);
    window.addEventListener("resize", () => window.innerWidth < 768 ? setWindowWidth(true) : setWindowWidth(false));
    return () => window.removeEventListener("resize", () => window.innerWidth < 768 ? setWindowWidth(true) : setWindowWidth(false));
  }, []);


  return (
    <main id="audio-main">
      {audioCopy.length === 0 ? <AudioLoading /> : <AudioTemplate songArray={audioCopy} />}
      {(windowWidth ? showMusicDetails : true) && (
        <section id="current-music-section">
          <div id="music-details-close-div" onClick={() => setShowMusicDetails(false)}>
            <FaAngleDown className="control-button" />
          </div>
          <img src={picture} alt={title} id="current-music-image" loading="lazy" />
          <div id="current-music-details-div">
            <h1 id="current-music-name">{title}</h1>
            <p id="current-music-artist">{artist}</p>
          </div>
          <div id="current-music-control-div">
            <MdForward10 onClick={() => forBackWardAudio(10)} className="current-music-control-button" />
            <MdReplay5 onClick={() => forBackWardAudio(-5)} className="current-music-control-button" />
          </div>
        </section>
      )}
    </main>
  );
};

export default AudioSection;
