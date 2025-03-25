import React, { Suspense, useContext, useEffect, lazy, useDeferredValue } from "react";
import { NavigateContext } from "../../services/contexts/NavigateContext";
import { MdForward10, MdReplay5 } from "react-icons/md";
import { FaAngleDown } from "react-icons/fa6";

const AudioTemplate = lazy(() => import("./AudioTemplate"));

const AudioSection = () => {
  const { showMusicDetails, setShowMusicDetails, audios, fetchAudio, currentAudio: { picture, title, artist } } = useContext(NavigateContext);
  const deferredAudios = useDeferredValue(audios);

  useEffect(() => {
    fetchAudio();
  }, []);

  return (
    <main id="audio-main">
      <Suspense fallback={<p>Loading...</p>}>
        <AudioTemplate songArray={deferredAudios} />
      </Suspense>
      {(window.innerWidth < 768 ? showMusicDetails : true) && <section id="current-music-section">
        <div id="music-details-close-div" onClick={() => setShowMusicDetails(false)}>
          <FaAngleDown className="control-button" />
        </div>
        <img src={picture} alt={title} id="current-music-image" loading="lazy" />
        <div id="current-music-details-div">
          <h1 id="current-music-name">{title}</h1>
          <p id="current-music-artist">{artist}</p>
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
