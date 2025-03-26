import { createContext, useRef, useState, useEffect } from "react";
import { useFetchAudios } from "../hooks/useFetchAudios";
import default_audio_image from "../assets/images/default-audio-image.png";

export const NavigateContext = createContext();

const NavigateProvider = ({ children }) => {
  const [showMusicDetails, setShowMusicDetails] = useState(false);
  const { audios } = useFetchAudios();
  const [audioCopy, setAudioCopy] = useState([]);
  const audioPlayerRef = useRef(null);
  const [musicTime, setMusicTime] = useState(0);
  const [audioDuration, setAudioDuration] = useState({ minute: 0, seconds: 0 });
  const [audioShuffle, setAudioShuffle] = useState(false);
  const [audioStatus, setAudioStatus] = useState({ status: false, no_audio: true });
  const [currentAudio, setCurrentAudio] = useState({ picture: default_audio_image, title: "No Audio", artist: "No Artist", duration: 0, link: "" });
  useEffect(() => {
    setAudioCopy(audios);
  }, [audios]);


  return <NavigateContext.Provider value={{ showMusicDetails, setShowMusicDetails, currentAudio, setCurrentAudio, audios, audioPlayerRef, audioStatus, setAudioStatus, audioShuffle, setAudioShuffle, audioCopy, setAudioCopy, musicTime, setMusicTime, audioDuration, setAudioDuration }}>{children}</NavigateContext.Provider>;
};

export default NavigateProvider;
