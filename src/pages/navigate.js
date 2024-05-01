import { createContext, useState } from "react";
import OliverTwist from "./music/audio/ArrDee - Oliver Twist (Official Audio).mp3";
import Basquiat from "./music/audio/Asake-Basquiat-(TrendyBeatz.com).mp3";
import NoCompetition from "./music/audio/Asake-Ft-Davido-No-Competition-(TrendyBeatz.com).mp3";
import RhythmBlues from "./music/audio/Ayra-Starr-Rhythm-and-Blues-(TrendyBeatz.com).mp3";
import Contraband from "./music/audio/Bella-Shmurda-Contraband-(TrendyBeatz.com).mp3";

export const PlayContext = createContext();

export const PlayContextDiv = ({ children }) => {
   
  let [currentAudio, setCurrentAudio] = useState({ id: 0, songName: "", songLink: "" });
  let listOfAudios = [
    { id: 0, songName: "Olivier Twist", songLink: OliverTwist },
    { id: 1, songName: "Basquiat", songLink: Basquiat },
    { id: 2, songName: "No Competition", songLink: NoCompetition},
    { id: 3, songName: "Rhythm & Blues", songLink: RhythmBlues },
    { id: 4, songName: "Contraband", songLink: Contraband },
  ]
  return (
    <PlayContext.Provider value={{currentAudio, setCurrentAudio, listOfAudios}}>
      {children}
    </PlayContext.Provider>
  );
};