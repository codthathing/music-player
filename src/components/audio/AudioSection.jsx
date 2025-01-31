import React, { useContext } from "react";
import AudioTemplate from "./AudioTemplate";
import OliverTwist from "../../assets/audio/ArrDee - Oliver Twist (Official Audio).mp3";
import Basquiat from "../../assets/audio/Asake-Basquiat-(TrendyBeatz.com).mp3";
import NoCompetition from "../../assets/audio/Asake-Ft-Davido-No-Competition-(TrendyBeatz.com).mp3";
import RhythmBlues from "../../assets/audio/Ayra-Starr-Rhythm-and-Blues-(TrendyBeatz.com).mp3";
import Contraband from "../../assets/audio/Bella-Shmurda-Contraband-(TrendyBeatz.com).mp3";
import { MdForward10, MdReplay5 } from "react-icons/md";
import { FaAngleDown } from "react-icons/fa6";
import music_app from "../../assets/images/music-app.webp";
import { NavigateContext } from "../../services/contexts/NavigateContext";

const AudioSection = () => {
  const {showMusicDetails, setShowMusicDetails} = useContext(NavigateContext);

  let listOfAudios = [
    { id: 0, songName: "Olivier Twist", songLink: OliverTwist },
    { id: 1, songName: "Basquiat", songLink: Basquiat },
    { id: 2, songName: "No Competition", songLink: NoCompetition },
    { id: 3, songName: "Rhythm & Blues", songLink: RhythmBlues },
    { id: 4, songName: "Contraband", songLink: Contraband },
  ];

  return (
    <main id="audio-main">
      <AudioTemplate songArray={listOfAudios} />
      {(window.innerWidth < 768 ? showMusicDetails : true) && <section id="current-music-section">
        <div id="music-details-close-div" onClick={() => setShowMusicDetails(false)}>
          <FaAngleDown className="control-button" />
        </div>
        <img src={music_app} alt="MUSIC" id="current-music-image" loading="lazy" />
        <div id="current-music-details-div">
          <h1 id="current-music-name">No Competition</h1>
          <p id="current-music-artist">Wizkid ft Davido</p>
        </div>
        <div id="current-music-control-div">
          <MdForward10 className="current-music-control-button" />
          <MdReplay5 className="current-music-control-button" />
        </div>
      </section>}
    </main>
  );
};

export default AudioSection;
