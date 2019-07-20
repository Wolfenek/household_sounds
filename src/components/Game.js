import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import shuffle from "lodash/shuffle";
import TileList from "./TileList";
import Alert from "./Alert";
import sound1 from "../sounds/1.mp3";
import sound2 from "../sounds/2.mp3";
import sound3 from "../sounds/3.mp3";
import sound4 from "../sounds/4.mp3";

const dopeSounds = shuffle([
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
]);

const ourTiles = shuffle([
  {
    id: "cat1",
    picture: "http://lorempixel.com/150/150/cats/",
    alt: "pic1"
  },
  {
    id: "cat2",
    picture: "http://lorempixel.com/150/150/sports/",
    alt: "pic2"
  },
  {
    id: "cat3",
    picture: "http://lorempixel.com/150/150/nature/",
    alt: "pic3"
  },
  {
    id: "cat4",
    picture: "http://lorempixel.com/150/150/people/",
    alt: "pic4"
  }
]);

const Game = () => {
  const [track, setTrack] = useState(0);
  const [score, setScore] = useState(0);
  const [canAnswer, setCanAnswer] = useState(false);
  const [alert, setAlert] = useState({ display: false });

  const sound = dopeSounds[track].dopeSound;
  const soundId = dopeSounds[track].id;

  const play = async () => {
    setCanAnswer(true);
    const audio = await new Audio(sound);
    audio.play();
  };

  const handleAlert = ({ type, text }) => {
    setAlert({ display: true, type, text });
    // setTimeout(() => {
    //   setAlert({ display: false });
    // }, 3000);
  };

  const getTileId = event => {
    setCanAnswer(false);
    console.log(event.target.id);
    if (event.target.id === soundId) {
      handleAlert({ type: "correct", text: "Good job!" });
      setScore(score + 1);
    } else {
      handleAlert({ type: "wrong", text: "Oops, that's wrong" });
    }
    setTrack((track + 1) % dopeSounds.length);
  };

  console.log(soundId);

  // if (track === 0 && canAnswer === true) {
  //   return <Redirect to="/final" />;
  // }

  console.log("the lenght is: ", dopeSounds.length);

  return (
    <div className="Game">
      <div className="call-to-action">
        <h2>What item makes that sound? Listen carefully and choose!</h2>
        {alert.display && <Alert type={alert.type} text={alert.text} />}
      </div>
      {canAnswer ? (
        <h1>':-)'</h1>
      ) : (
        <button
          className="btn btn-play"
          aria-label="start-button"
          onClick={play}
        >
          {track < 1 ? "Start" : "Next"}
        </button>
      )}
      <TileList
        ourTiles={ourTiles}
        getTileId={getTileId}
        canAnswer={canAnswer}
      />
      <br />
      <br />
      <div className="score">Correct answers so far: {score}</div>
      <br />
      <br />
    </div>
  );
};

export default Game;
