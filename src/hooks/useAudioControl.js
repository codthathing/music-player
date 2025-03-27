import { useContext, useEffect } from "react";
import { NavigateContext } from "../contexts/NavigateContext";

export const useAudioControl = () => {
  const { audioStatus, setAudioStatus, audioCopy, setCurrentAudio, currentAudio: { current_ID }, audioPlayerRef, audioShuffle, setMusicTime, setAudioDuration } = useContext(NavigateContext);

  const audioInitialAction = () => {
    setAudioDuration({ minute: 0, seconds: 0 });
    setAudioStatus((prevState) => ({ ...prevState, status: true }));
    setTimeout(() => {
      audioPlayerRef.current.play();
      audioPlayerRef.current.addEventListener('timeupdate', () => setMusicTime(Math.ceil(audioPlayerRef.current.currentTime)));
    }, 1);
  };

  const getAudio = (id, current_ID) => {
    if (audioStatus.no_audio) setAudioStatus((prevState) => ({ ...prevState, no_audio: false }));
    setCurrentAudio({ ...audioCopy.find((audio) => audio.id === id), current_ID: current_ID });
    audioInitialAction();
  };

  const updateAudioStatus = (new_status, action) => {
    if (audioCopy.length !== 0) {
      if (audioStatus.no_audio) {
        setAudioStatus((prevState) => ({ ...prevState, no_audio: false }));
        const startUpAudioId = audioShuffle ? Math.floor(Math.random() * audioCopy.length) : 0;
        setCurrentAudio({ ...audioCopy.find((audio, index) => index === startUpAudioId), current_ID: startUpAudioId });
        setTimeout(() => audioPlayerRef.current.addEventListener('timeupdate', () => setMusicTime(Math.ceil(audioPlayerRef.current.currentTime))), 1)
      };
      setAudioStatus((prevState) => ({ ...prevState, status: new_status }));
      { action ? setTimeout(() => audioPlayerRef.current.pause(), 1) : setTimeout(() => audioPlayerRef.current.play(), 1) };
    };
  };

  useEffect(() => {
    audioPlayerRef.current.addEventListener("play", setAudioStatus((prevState) => ({ ...prevState, status: true })));
    audioPlayerRef.current.addEventListener("pause", setAudioStatus((prevState) => ({ ...prevState, status: false })));
    return () => {
      audioPlayerRef.current.removeEventListener("play", setAudioStatus((prevState) => ({ ...prevState, status: true })));
      audioPlayerRef.current.removeEventListener("pause", setAudioStatus((prevState) => ({ ...prevState, status: false })));
    };
  }, [audioPlayerRef]);

  const audioControl = (type) => {
    if (!audioStatus.no_audio) {
      const newAudioId = audioShuffle ? Math.floor(Math.random() * audioCopy.length) : type === "NEXT" ? (current_ID < audioCopy.length - 1 ? current_ID + 1 : 0) : current_ID > 0 ? current_ID - 1 : audioCopy.length - 1;
      setCurrentAudio({ ...audioCopy.find((audio, index) => index === newAudioId), current_ID: newAudioId });
      audioInitialAction();
    };
  };

  return { getAudio, updateAudioStatus, audioControl };
};
