import { useState, useEffect } from "react";
import jsmediatags from 'jsmediatags/dist/jsmediatags.min.js';

export const useFetchAudios = () => {
  const [audios, setAudios] = useState([]);
  
  let listOfAudios = [ 
    require("../assets/audio/ArrDee - Oliver Twist (Official Audio).mp3"), 
    require("../assets/audio/Asake-Basquiat-(TrendyBeatz.com).mp3"), 
    require("../assets/audio/Asake-Ft-Davido-No-Competition-(TrendyBeatz.com).mp3"), 
    require("../assets/audio/Ayra-Starr-Rhythm-and-Blues-(TrendyBeatz.com).mp3"), 
    require("../assets/audio/Bella-Shmurda-Contraband-(TrendyBeatz.com).mp3") 
  ];
  
  const convertToImageURL = (picture) => {
    if (!picture || !picture.data) return null;

    const byteArray = new Uint8Array(picture.data);
    const blob = new Blob([byteArray], { type: picture.format });
    return URL.createObjectURL(blob);
  };

  const fetchAudio = async () => {
    try {
      const audioBlobs = await Promise.all(
        listOfAudios.map(async (file) => {
          try {
            const response = await fetch(file);
            if (!response.ok) throw new Error(`Failed to fetch ${file}`);
            const blob = await response.blob();
            return { file: blob, link: file, url: URL.createObjectURL(blob) };
          } catch (error) {
            console.error(`Error fetching ${file}:`, error);
            return null;
          };
        })
      );
      
      const validAudioBlobs = audioBlobs.filter(blob => blob !== null);

      const results = await Promise.all(
        validAudioBlobs.map(async (audio) => {
          const duration = await new Promise((resolve) => {
            const audioElement = new Audio(audio.url);
            audioElement.addEventListener('loadedmetadata', () => resolve(Math.round(audioElement.duration)));
            audioElement.addEventListener('error', () => resolve(0));
          });

          const tags = await new Promise((resolve, reject) => {
            jsmediatags.read(audio.file, { onSuccess: resolve, onError: reject });
          });

          return {
            id: Date.now(),
            link: audio.link,
            artist: tags.tags.artist || "Unknown Artist",
            title: tags.tags.title?.endsWith("TrendyBeatz.com") ? tags.tags.title.replace(" || TrendyBeatz.com", "") : tags.tags.title || audio.name,
            picture: convertToImageURL(tags.tags.picture),
            duration: duration,
          };
        })
      );
      setAudios(results);
    } catch (error) {
      setAudios([]);
    }
  };

  useEffect(() => {
    fetchAudio();
  }, [fetchAudio]);

  return { audios };
};