import React, { useState } from "react";
import TileList from "./TileList";
import Alert from "./Alert";
import { GameSounds } from "../data/HouseholdGame";

const Game = () => {
  // State Hooks
  const [track, setTrack] = useState(0);
  const [score, setScore] = useState(0);
  const [canAnswer, setCanAnswer] = useState(false);
  const [alert, setAlert] = useState({ display: false });
  // Variables holding crucial information
  const sound = GameSounds[track].dopeSound;
  const soundId = GameSounds[track].id;

  const play = async () => {
    setCanAnswer(true);
    const audio = await new Audio(sound);
    audio.play();
  };

  // const handleAlert = ({ type, text }) => {
  //   setAlert({ display: true, type, text });
  //   setTimeout(() => {
  //     setAlert({ display: false });
  //   }, 3000);
  // };

  const getTileId = event => {
    setCanAnswer(false);
    console.log(event.target.id);
    if (event.target.id === soundId) {
      // handleAlert({ type: "correct", text: "Good job!" });
      setScore(score + 1);
    } else {
      // handleAlert({ type: "wrong", text: "Oops, that's wrong" });
    }
    setTrack((track + 1) % GameSounds.length);
  };

  console.log(soundId);

  // if (track === 0 && canAnswer === true) {
  //   return <Redirect to="/final" />;
  // }

  console.log("the lenght is: ", GameSounds.length);

  return (
    <div className="Game">
      <div className="call-to-action">
        <h2>What item makes that sound? Listen carefully and choose!</h2>
        {alert.display && <Alert type={alert.type} text={alert.text} />}
      </div>
      {canAnswer ? (
        <span className="emoji" role="img" aria-label="sheep">🤔</span>
      ) : (
        <button
          className="btn btn-play"
          aria-label="start-button"
          onClick={play}
        >
          {track < 1 ? "Start" : "Next"}
        </button>
      )}
      <TileList getTileId={getTileId} canAnswer={canAnswer} />
      <br />
      <br />
      <div className="score">Correct answers so far: {score}</div>
      <br />
      <br />
    </div>
  );
};

export default Game;
