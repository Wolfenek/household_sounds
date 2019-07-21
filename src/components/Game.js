import React, { useState } from "react";
import TileList from "./TileList";
import { GameSounds } from "../data/HouseholdGame";

const Game = () => {
  // State Hooks
  const [track, setTrack] = useState(0);
  const [score, setScore] = useState(0);
  const [canAnswer, setCanAnswer] = useState(false);
  const [showEmoji, setShowEmoji] = useState({ show: false });
  // Variables holding crucial information
  const sound = GameSounds[track].dopeSound;
  const soundId = GameSounds[track].id;

  const handleEmoji = ({ emoji, feedbackText }) => {
    setShowEmoji({ show: true, emoji, feedbackText });
    // setTimeout(() => {
    //   setAlert({ display: false });
    // }, 3000);
  };

  const play = async () => {
    setCanAnswer(true);
    handleEmoji({ show: true, emoji: "🤔", feedbackText: "Hmm..." });
    const audio = await new Audio(sound);
    audio.play();
  };

  const getTileId = event => {
    setCanAnswer(false);
    console.log(event.target.id);
    if (event.target.id === soundId) {
      handleEmoji({ emoji: "😃", feedbackText: "Good job!" });
      setScore(score + 1);
    } else {
      handleEmoji({ emoji: "😓", feedbackText: "Oops, wrong" });
    }
    setTrack((track + 1) % GameSounds.length);
  };

  return (
    <div className="Game">
      <h2>What item makes that sound? Listen carefully and choose!</h2>
      <button className="btn" aria-label="start-button" onClick={play}>
        {track < 1 ? "Start" : "Next"}
      </button>
      <TileList getTileId={getTileId} canAnswer={canAnswer} />
      <div className="emoji">
        {showEmoji && (
          <>
            <span role="img" aria-label="emoji">
              {showEmoji.emoji}
            </span>
            <p>{showEmoji.feedbackText}</p>
          </>
        )}
      </div>
      <div className="score">
        <p>Correct answers: {score}</p>
      </div>
    </div>
  );
};

export default Game;
