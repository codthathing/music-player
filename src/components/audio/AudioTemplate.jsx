import { useAudioControl } from "../../hooks/useAudioControl";

const AudioTemplate = ({ songArray }) => {
  const { getAudio } = useAudioControl();

  return (
    <section id="musicSection">
      {songArray.map(({ id, artist, title, picture }, index) => {
        return (
          <div key={id} onClick={() => getAudio(id)} className="musicDiv">
            <var className="audio-number">{index + 1}</var>
            <img src={picture} alt={title} className="audio-image" loading="lazy" />
            <aside className="controlDisplay">
              <h1 className="audioName">{title}</h1>
              <p className="audio-artist">{artist}</p>
            </aside>
          </div>
        );
      })}
    </section>
  );
};

export default AudioTemplate;
