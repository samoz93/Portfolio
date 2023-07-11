import { AudioVisualizerController } from "../services/audio.vis.service.ts";

export const MusicList = () => {
  const musicList = ["best-time", "electro", "satara"];

  const playMusic = (name: string) => {
    AudioVisualizerController.load(`/audio/${name}.mp3`);
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "10%",
      }}
    >
      {musicList.map((music) => {
        return (
          <button key={music} onClick={() => playMusic(music)}>
            {music}
          </button>
        );
      })}
    </div>
  );
};
