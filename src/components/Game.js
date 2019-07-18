import React, { useState, useEffect } from "react";
import TileList from "./TileList";
import sound1 from "../sounds/1.mp3";
import sound2 from "../sounds/2.mp3";
import sound3 from "../sounds/3.mp3";
import sound4 from "../sounds/4.mp3";

const dopeSounds = [
  {
    id: "cat1",
    dopeSound: sound1
  },
  {
    id: "cat2",
    dopeSound: sound2
  },
  {
    id: "cat3",
    dopeSound: sound3
  },
  {
    id: "cat4",
    dopeSound: sound4
  }
];

const ourTiles = [
  {
    id: "cat1",
    picture: "http://lorempixel.com/150/150/cats/",
    alt: "pic1"
  },
  {
    id: "cat2",
    picture: "http://lorempixel.com/150/150/cats/",
    alt: "pic2"
  },
  {
    id: "cat3",
    picture: "http://lorempixel.com/150/150/cats/",
    alt: "pic3"
  },
  {
    id: "cat4",
    picture: "http://lorempixel.com/150/150/cats/",
    alt: "pic4"
  }
];

const Game = () => {
  // Game started
  const [playing, setPlaying] = useState(0);
  const [soundId, setSoundId] = useState(dopeSounds[playing].id);
  // Get id of clicked tile
  const [tileId, setTileId] = useState("");
  const [score, setScore] = useState(0);
  const [clickedNumber, setClickedNumber] = useState(0);

  useEffect(() => {
    
      setPlaying((playing + 1) % dopeSounds.length);
      console.log(dopeSounds[playing].id);
      setSoundId(dopeSounds[playing].id)
      audio.play();
      if (tileId === soundId) {
        console.log("success");
        setScore(score + 1);
      } else {
        console.log("nope");
      }
  }, [clickedNumber])


  const sound = dopeSounds[playing].dopeSound;
  const audio = new Audio(sound);

  const getTileId = id => {
    setTileId(id);
    setClickedNumber(clickedNumber +1);
  };

  return (
    <>
      <button
        className="btn btn-play"
        aria-label="start-button"
      >
        Play
      </button>
      <TileList ourTiles={ourTiles} getTileId={getTileId} />
      <br />
      <br />
      <br />
      sound: {soundId}
      <br />
      tile: {tileId}
      <div>You got {score} right!</div>
      <br />
      <br />
      {clickedNumber}
    </>
  );
};

export default Game;
