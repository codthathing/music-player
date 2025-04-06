import { useContext, useEffect } from "react";
import { NavigateContext } from "../contexts/NavigateContext";

export const useAudioControl = () => {
  const { audioStatus, setAudioStatus, audioCopy, setCurrentAudio, currentAudio: { current_ID }, audioPlayerRef, audioShuffle, setMusicTime } = useContext(NavigateContext);
  const audioElement = audioPlayerRef.current;

  useEffect(() => {
    if (!audioElement) return;

    audioElement.addEventListener("play", () => setAudioStatus((prevState) => ({ ...prevState, status: true })));
    audioElement.addEventListener("pause", () => setAudioStatus((prevState) => ({ ...prevState, status: false })));
    audioElement.addEventListener('timeupdate', () => setMusicTime(Math.ceil(audioElement.currentTime)));

    return () => {
      audioElement.removeEventListener("play", () => setAudioStatus((prevState) => ({ ...prevState, status: true })));
      audioElement.removeEventListener("pause", () => setAudioStatus((prevState) => ({ ...prevState, status: false })));
      audioElement.removeEventListener('timeupdate', () => setMusicTime(Math.ceil(audioElement.currentTime)));
    }
  }, []);

  const getAudio = (id, current_ID) => {
    if (audioStatus.no_audio) setAudioStatus((prevState) => ({ ...prevState, no_audio: false }));
    setCurrentAudio({ ...audioCopy.find((audio) => audio.id === id), current_ID: current_ID });
    setTimeout(() => audioElement.play(), 0);
  };

  const updateAudioStatus = (action) => {
    if (audioCopy.length !== 0) {
      if (audioStatus.no_audio) {
        setAudioStatus((prevState) => ({ ...prevState, no_audio: false }));
        const startUpAudioId = audioShuffle ? Math.floor(Math.random() * audioCopy.length) : 0;
        setCurrentAudio({ ...audioCopy.find((audio, index) => index === startUpAudioId), current_ID: startUpAudioId });
      };
      setTimeout(() => action ? audioElement.pause() : audioElement.play(), 0);
    };
  };

  const audioControl = (type) => {
    if (!audioStatus.no_audio) {
      const newAudioId = audioShuffle ? Math.floor(Math.random() * audioCopy.length) : type === "NEXT" ? (current_ID < audioCopy.length - 1 ? current_ID + 1 : 0) : current_ID > 0 ? current_ID - 1 : audioCopy.length - 1;
      setCurrentAudio({ ...audioCopy.find((audio, index) => index === newAudioId), current_ID: newAudioId });
      setTimeout(() => audioElement.play(), 0);
    };
  };

  return { getAudio, updateAudioStatus, audioControl };
};
