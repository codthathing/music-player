import audio_load_gif from "../../assets/images/audio-load-gif.webp";

const AudioLoading = () => {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%", height: "100%" }}>
      <img src={audio_load_gif} id="loading-gif" alt="LOADING GIF" />
    </div>
  );
};

export default AudioLoading;