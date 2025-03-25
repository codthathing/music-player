import { useContext } from "react";
import { NavigateContext } from "../services/contexts/NavigateContext";

export const useAudioControl = () => {
  const { audioStatus, setAudioStatus, audios, setCurrentAudio, audioPlayerRef } = useContext(NavigateContext);

  const getAudio = (id) => {
    if(audioStatus.no_audio) setAudioStatus(prevState => ({ ...prevState, no_audio: false }));
    setCurrentAudio(audios.find((audio) => audio.id === id));
    setAudioStatus(prevState => ({ ...prevState, status: true }));
    setTimeout(() => audioPlayerRef.current.play(), 1);
  };

  const updateAudioStatus = (new_status, action) => {
    if(audioStatus.no_audio) {
      setAudioStatus(prevState => ({ ...prevState, no_audio: false }));
      setCurrentAudio(audios[0]);
    };
    setAudioStatus(prevState => ({ ...prevState, status: new_status }));
    {action ? setTimeout(() => audioPlayerRef.current.pause(), 1) : setTimeout(() => audioPlayerRef.current.play(), 1)}; 
  };

  return { getAudio, updateAudioStatus }
};