import React from "react";

const Results = ({ score, numberOfSounds, startOver }) => {
  return (
    <>
      <h2>
        You got {score} {score === 1 ? "answer" : "answers"} out of {numberOfSounds} right!
      </h2>
      <button className="btn" aria-label="play-again-button" onClick={startOver}>
        Play again
      </button>
    </>
  );
};

export default Results;
