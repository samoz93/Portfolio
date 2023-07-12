import { useState } from "react";
import { AudioVisualizerController } from "../services/audio.vis.service.ts";

export const MusicList = () => {
  const musicList = ["best-time", "electro", "satara"];
  const radius = 300;

  const playMusic = (name: string) => {
    AudioVisualizerController.load(`/audio/${name}.mp3`);
    setIsVisible(false);
  };

  const sanitizeNameAndCapitilizeFirstLetter = (name: string) => {
    const nameArray = name.split("-");
    return nameArray
      .map((name) => {
        return name.charAt(0).toUpperCase() + name.slice(1);
      })
      .join(" ");
  };
  const [isVisible, setIsVisible] = useState(false);
  function circleXY(index: number) {
    const single = Math.PI / musicList.length;
    const angle = single * (index - 1);
    const x = radius * Math.sin(angle);
    const y = radius * Math.cos(angle) - radius * 0.5;

    return { x, y };
  }
  return (
    <div
      style={{
        position: "absolute",
        borderRadius: "100px",
        color: "black",
        bottom: "10%",
        left: "50%",
        translate: "-50%",
      }}
    >
      <a
        href="#"
        onClick={() => {
          setIsVisible(!isVisible);
        }}
        style={{
          color: "black",
        }}
      >
        Play some music while waiting ?
      </a>

      {musicList.map((name, index) => {
        return (
          <button
            onClick={() => {
              playMusic(name);
            }}
            key={name}
            style={{
              width: `150px`,
              zIndex: 1,
              height: `50px`,
              pointerEvents: isVisible ? "auto" : "none",
              opacity: isVisible ? 1 : 0,
              position: "absolute",
              translate: isVisible ? "0" : "-50%",
              bottom: isVisible ? `${circleXY(index).y}px` : "10%",
              left: isVisible ? `${circleXY(index).x + 40}px` : "50%",
            }}
          >
            {sanitizeNameAndCapitilizeFirstLetter(name)}
          </button>
        );
      })}
    </div>
  );
};
