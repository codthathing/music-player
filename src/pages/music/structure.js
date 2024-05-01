import React, { useContext, useState } from "react";
import { PlayContext } from "../navigate";

const Structure = ({ id, songLink, songName }) => {

  const { listOfAudios, setCurrentAudio } = useContext(PlayContext);

  const [iconChange, setIconChange] = useState({
    detIcon: false,
    iconClass: "fa-solid fa-circle-play controlIcons"
  });

  const playMusic = (id) => {
    // listOfAudios.map((player) => {
    //   if (player.id == id) {
        let currentMusic = listOfAudios.filter((x) => x.id == id);
        setCurrentAudio(currentMusic);
        if (iconChange.detIcon) {
          setIconChange({ ...iconChange, detIcon: false, iconClass: "fa-solid fa-circle-play controlIcons" })
        } else {
          setIconChange({ ...iconChange, detIcon: true, iconClass: "fa-solid fa-circle-pause controlIcons" })
        };
    //   } else if (player.id != id) {
    //     setIconChange({ ...iconChange, detIcon: false, iconClass: "fa-solid fa-circle-play controlIcons" });
    //   };
    // });
  };

  return (
    <div key={id} className="musicDiv">
      <audio src={songLink} type="audio/mpeg" className="audioMain"></audio>
      <aside className="controlDisplay">
        <cite className="audioName">{songName}</cite>
        <div className="iconDiv">
          <i className={iconChange.iconClass} onClick={() => playMusic(id)} style={{ color: "#ffffff" }}></i>
        </div>
      </aside>
    </div>
  );
};

export default Structure;