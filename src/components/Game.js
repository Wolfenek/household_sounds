import React, { useState, useEffect } from "react";
// Lodash shuffle function
import shuffle from "lodash/shuffle";
// Data
import { GameSounds, GameTiles } from "../data/HouseholdGame";
// Components
import CallToAction from "./CallToAction";
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
  const [stillPlaying, setStillPlaying] = useState(true);
  // Variables holding data information
  const sound = sounds[track].dopeSound;
  const soundId = sounds[track].id;
  const numberOfSounds = GameSounds.length;

  // Display emoji
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

  // Start over
  const startOver = () => {
    setSounds(shuffle(GameSounds));
    setTiles(shuffle(GameTiles));
    setTrack(0);
    setScore(0);
    setShowEmoji({ show: false });
    setStillPlaying(true);
  };

  useEffect(() => {
    const game = document.getElementById("Game");
    game.classList.remove("Game-hidden");
  }, []);

  return (
    <div id="Game" className="Game-hidden">
      {track}
      {stillPlaying ? (
        <>
          <CallToAction play={play} playButtonText={playButtonText} />
          <TileList tiles={tiles} getTileId={getTileId} canAnswer={canAnswer} />
        </>
      ) : (
        <Results
          score={score}
          numberOfSounds={numberOfSounds}
          startOver={startOver}
        />
      )}
      <div className="emoji-container">
        {showEmoji && <Emoji showEmoji={showEmoji} />}
      </div>
      {stillPlaying && (
        <div className="score">
          <p>
            Question {track + 1} / {numberOfSounds}
          </p>
        </div>
      )}
    </div>
  );
};

export default Game;
