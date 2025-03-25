import { createContext, useRef, useState } from "react";
import { useFetchAudios } from "../../hooks/useFetchAudios";

export const NavigateContext = createContext();

const NavigateProvider = ({ children }) => {
  const [showMusicDetails, setShowMusicDetails] = useState(false);
  const { audios, fetchAudio } = useFetchAudios();
  const audioPlayerRef = useRef(null);
  const [audioStatus, setAudioStatus] = useState({ status: false, no_audio: true });
  const [currentAudio, setCurrentAudio] = useState({ picture: "", title: "", artist: "", duration: 0, link: "" });

  return <NavigateContext.Provider value={{ showMusicDetails, setShowMusicDetails, currentAudio, setCurrentAudio, audios, fetchAudio, audioPlayerRef, audioStatus, setAudioStatus }}>{children}</NavigateContext.Provider>;
};

export default NavigateProvider;
