import React, { useState } from "react";
import { Redirect, NavLink } from "react-router-dom";
import TileList from "./TileList";
import { GameSounds } from "../data/HouseholdGame";

const Game = () => {
  // State Hooks
  const [track, setTrack] = useState(0);
  const [score, setScore] = useState(0);
  const [canAnswer, setCanAnswer] = useState(false);
  const [showEmoji, setShowEmoji] = useState({ show: false });
  const [stillPlaying, setStillPlaying] = useState(true);
  // Variables holding crucial information
  const sound = GameSounds[track].dopeSound;
  const soundId = GameSounds[track].id;
  const numberOfSounds = GameSounds.length;

  console.log(numberOfSounds);

  const handleEmoji = ({ emoji, feedbackText }) => {
    setShowEmoji({ show: true, emoji, feedbackText });
    // setTimeout(() => {
    //   setAlert({ display: false });
    // }, 3000);
  };
  // Produce new sounds
  const play = async () => {
    setCanAnswer(true);
    handleEmoji({ show: true, emoji: "🤔", feedbackText: "Hmm..." });
    const audio = await new Audio(sound);
    audio.play();
  };

  // Check result of click
  const getTileId = event => {
    setCanAnswer(false);
    console.log(event.target.id);
    if (event.target.id === soundId) {
      handleEmoji({ emoji: "😃", feedbackText: "Good job!" });
      setScore(score + 1);
    } else {
      handleEmoji({ emoji: "😓", feedbackText: "Oops, wrong" });
    }
    setTrack((track + 1) % numberOfSounds);
    if (track + 1 === numberOfSounds) setStillPlaying(false);
  };

  // Display text on main button
  let playButtonText;
  if (canAnswer) {
    playButtonText = "Replay";
  } else if (track < 1 && !canAnswer) {
    playButtonText = "Start";
    // } else if (track === GameSounds.length) {
    //   playButtonText = "Show Results";
  } else {
    playButtonText = "Next";
  }

  // Show results
  // const showResults = () => {
  //   if (track + 1 === numberOfSounds && canAnswer) console.log("done");
  // };

  // showResults();

  return (
    <div className="Game">
      {track}
      {stillPlaying ? (
        <>
        <h2>What item makes that sound? Listen carefully and choose!</h2>
        <button className="btn" aria-label="start-button" onClick={play}>
          {playButtonText}
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
        </>
      ) : (
      <Redirect to='/results' />
      )}
      
      
      <div className="score">
        <p>
          Question {track + 1} out of {numberOfSounds}
        </p>
      </div>
      <NavLink to="/" className="btn">
          Play again
        </NavLink>
    </div>
  );
};

export default Game;
