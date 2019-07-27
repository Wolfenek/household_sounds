import React, { useState, useEffect } from "react";
// Lodash shuffle function
import shuffle from "lodash/shuffle";
// Data
import { GameSounds, GameTiles } from "../data/HouseholdGame";
// Components
import TileList from "./TileList";
import Emoji from "./Emoji";
import Results from "./Results";

const Game = () => {
  // State Hooks
  const [sounds, setSounds] = useState(shuffle(GameSounds));
  const [tiles, setTiles] = useState(shuffle(GameTiles));
  const [track, setTrack] = useState(0);
  const [score, setScore] = useState(0);
  const [canAnswer, setCanAnswer] = useState(false);
  const [showEmoji, setShowEmoji] = useState({});
  const [showPlayButton, setShowPlayButton] = useState(true);
  const [gameRunning, setGameRunning] = useState(true);
  // Variables holding data information
  const sound = sounds[track].gameSound;
  const soundId = sounds[track].id;
  const numberOfSounds = GameSounds.length;
  console.log(tiles);

  // Display emoji
  const handleEmoji = ({ emoji, feedbackText }) => {
    setShowEmoji({ emoji, feedbackText });
  };
  // Produce new sounds
  const play = async () => {
    setCanAnswer(true);
    handleEmoji({ emoji: "🤔", feedbackText: "Hmm..." });
    // const audio = await new Audio(sound);
    // audio.currentTime = 0;
    // audio.play();
  };

  // Check result of click
  const getTileId = event => {
    setCanAnswer(false);
    // console.log(event.currentTarget.id);
    if (event.currentTarget.id === soundId) {
      handleEmoji({ emoji: "😃", feedbackText: "Good job!" });
      setScore(score + 1);
    } else {
      handleEmoji({ emoji: "😓", feedbackText: "Oops, wrong" });
    }
    // Don't show 1/4 again
    if (track + 1 !== numberOfSounds) setTrack((track + 1) % numberOfSounds);
    if (track + 1 === numberOfSounds) setShowPlayButton(false);
  };

  // Display text on main button
  let playButtonText;
  if (canAnswer) {
    playButtonText = "Replay";
  } else if (track < 1 && !canAnswer) {
    playButtonText = "Start";
  } else {
    playButtonText = "Next";
  }

  // Show results
  const showResults = () => {
    setGameRunning(false);
  };

  // Start game over
  const startOver = () => {
    setSounds(shuffle(GameSounds));
    setTiles(shuffle(GameTiles));
    setTrack(0);
    setScore(0);
    setShowEmoji({ show: false });
    setShowPlayButton(true);
    setGameRunning(true);
  };

  // Initial fade in transition
  useEffect(() => {
    const game = document.getElementById("Game");
    game.classList.remove("Game-hidden");
  }, []);

  return (
    <div id="Game" className="Game-hidden">
      {soundId}
      Score: {score}
      {gameRunning ? (
        <>
          <h2>
            What instrumennt does it sound like? Listen carefully and choose!
          </h2>
          {showPlayButton ? (
              <audio src={sound} controls controlsList="nodownload" onPlay={play}/>
            // <button className="btn" aria-label="start-button" onClick={play}>
            //   {playButtonText}
            
            // </button>
          ) : (
            <button
              className="btn btn-results"
              aria-label="start-button"
              onClick={showResults}
            >
              Show Results
            </button>
          )}
          {/* <CallToAction play={play} playButtonText={playButtonText} /> */}
          <TileList tiles={tiles} getTileId={getTileId} canAnswer={canAnswer} />
          <div className="emoji-container">
            <Emoji showEmoji={showEmoji} />
          </div>
          <div className="score">
            <p>
              Question {track + 1} / {numberOfSounds}
            </p>
          </div>
        </>
      ) : (
        <Results
          score={score}
          numberOfSounds={numberOfSounds}
          startOver={startOver}
        />
      )}
    </div>
  );
};

export default Game;
