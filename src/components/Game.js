import React, { useState, useEffect } from "react";
// Lodash shuffle function
import shuffle from "lodash/shuffle";
// Data
import { GameSounds, GameTiles } from "../data/InstrumentsGame";
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
  const [showEmoji, setShowEmoji] = useState({ show: false });
  const [showAudioControls, setShowAudioControls] = useState(true);
  const [gameRunning, setGameRunning] = useState(true);
  // Variables holding data information
  const sound = sounds[track].gameSound;
  const soundId = sounds[track].id;
  const numberOfSounds = GameSounds.length;
  
  // Display emoji
  const handleEmoji = ({ emoji, feedbackText }) => {
    setShowEmoji({ emoji, feedbackText });
  };
  // Produce new sounds
  const play = async () => {
    setCanAnswer(true);
    handleEmoji({ show: true, emoji: "🤔", feedbackText: "Hmm..." });
  };

  // Check result of click
  const getTileId = event => {
    setCanAnswer(false);
    if (event.currentTarget.id === soundId) {
      handleEmoji({ emoji: "😃", feedbackText: "Good job!" });
      setScore(score + 1);
    } else {
      handleEmoji({ emoji: "😓", feedbackText: "Oops, wrong" });
    }
    // Don't show 1/12 again
    if (track + 1 !== numberOfSounds) setTrack((track + 1) % numberOfSounds);
    if (track + 1 === numberOfSounds) setShowAudioControls(false);
  };

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
    setShowAudioControls(true);
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
            What instrumennt does it sound like? Listen and choose carefully!
          </h2>
          {showAudioControls ? (
            <audio
              src={sound}
              controls
              controlsList="nodownload"
              onPlay={!canAnswer ? play : null}
            />
          ) : (
            <button
              className="btn"
              aria-label="start-button"
              onClick={showResults}
            >
              Show Results
            </button>
          )}
          <TileList tiles={tiles} getTileId={getTileId} canAnswer={canAnswer} />
          <div className="emoji-container">
            {showEmoji && <Emoji showEmoji={showEmoji} />}
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
