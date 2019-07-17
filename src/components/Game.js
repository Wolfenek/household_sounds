import React from "react";
import TileList from "./TileList";
import sound1 from "../sounds/1.mp3";
import sound2 from "../sounds/2.mp3";
import sound3 from "../sounds/3.mp3";
import sound4 from "../sounds/4.mp3";

const dopeSounds = [
  {
    id: 1,
    dopeSound: sound1
  },
  {
    id: 2,
    dopeSound: sound2
  },
  {
    id: 3,
    dopeSound: sound3
  },
  {
    id: 4,
    dopeSound: sound4
  }
];

const ourTiles = [
  {
    id: 1,
    picture: "http://lorempixel.com/150/150/cats/",
    alt: "pic1"
  },
  {
    id: 2,
    picture: "http://lorempixel.com/150/150/cats/",
    alt: "pic2"
  },
  {
    id: 3,
    picture: "http://lorempixel.com/150/150/cats/",
    alt: "pic3"
  },
  {
    id: 4,
    picture: "http://lorempixel.com/150/150/cats/",
    alt: "pic4"
  }
];

const Game = () => {
  // Game started
  const [playing, setPlaying] = React.useState(0);
  // const togglePlay = () => setPlaying(!playing);

  // React.useEffect(() => {
  //   console.log("yeah played");
  //   playing ? audio.play() : audio.pause();
  // }, [playing]);

  function newSound() {
    setPlaying((playing + 1) % dopeSounds.length);
    console.log(playing);
    audio.play();
  }

  const sound = dopeSounds[playing].dopeSound;
  const audio = new Audio(sound);
  return (
    <>
      <button
        onClick={newSound}
        className="btn btn-play"
        aria-label="start-button"
      >
        Play
      </button>
      <TileList ourTiles={ourTiles} />
    </>
  );
};

export default Game;
