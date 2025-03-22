import React from "react";
import music_app from "../../assets/images/music-app.webp";

const AudioTemplate = ({ songArray }) => {
  return (
    <section id="musicSection">
      {songArray.map(({ id, songLink, songName }) => {
        return (
          <div key={id} className="musicDiv">
            <var className="audio-number">{id + 1}</var>
            <img src={music_app} alt="MUSIC APP" className="audio-image" loading="lazy" />
            <aside className="controlDisplay">
              <h1 className="audioName">{songName}</h1>
              <p className="audio-artist">Wizkid ft Davido</p>
            </aside>
          </div>
        );
      })}
    </section>
  );
};

export default AudioTemplate;
