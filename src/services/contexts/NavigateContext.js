import { createContext, useState } from "react";
import OliverTwist from "../../assets/audio/ArrDee - Oliver Twist (Official Audio).mp3";
import Basquiat from "../../assets/audio/Asake-Basquiat-(TrendyBeatz.com).mp3";
import NoCompetition from "../../assets/audio/Asake-Ft-Davido-No-Competition-(TrendyBeatz.com).mp3";
import RhythmBlues from "../../assets/audio/Ayra-Starr-Rhythm-and-Blues-(TrendyBeatz.com).mp3";
import Contraband from "../../assets/audio/Bella-Shmurda-Contraband-(TrendyBeatz.com).mp3";

export const NavigateContext = createContext();

const NavigateProvider = ({ children }) => {
  let [currentAudio, setCurrentAudio] = useState({ id: 0, songName: "", songLink: "" });
  let listOfAudios = [
    { id: 0, songName: "Olivier Twist", songLink: OliverTwist },
    { id: 1, songName: "Basquiat", songLink: Basquiat },
    { id: 2, songName: "No Competition", songLink: NoCompetition },
    { id: 3, songName: "Rhythm & Blues", songLink: RhythmBlues },
    { id: 4, songName: "Contraband", songLink: Contraband },
  ];
  return <NavigateContext.Provider value={{ currentAudio, setCurrentAudio, listOfAudios }}>{children}</NavigateContext.Provider>;
};

export default NavigateProvider;
