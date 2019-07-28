import React, { useEffect } from "react";
import { ReactComponent as Great } from "../images/great.svg";
import { ReactComponent as Ok } from "../images/ok.svg";

const Results = ({ score, numberOfSounds, startOver }) => {
  const calculatedScore = Math.ceil(numberOfSounds * 0.8);
  console.log(calculatedScore);
  const classNames = "results-svg results-svg-hidden";

  const Feedback =
    score >= calculatedScore ? (
      <>
        <h2>Well done!</h2>
        <Great className={classNames} />
      </>
    ) : (
      <>
        <h2>Nice, but you can do better than that!</h2>
        <Ok className={classNames} />
      </>
    );

  useEffect(() => {
    const resultImg = document.querySelector(".results-svg");
    resultImg.classList.remove("results-svg-hidden");
  }, []);

  return (
    <>
      <h2>
        You got {score} {score === 1 ? "answer" : "answers"} out of{" "}
        {numberOfSounds} right!
      </h2>
      <button
        className="btn"
        aria-label="play-again-button"
        onClick={startOver}
      >
        Play again
      </button>
      {Feedback}
    </>
  );
};

export default Results;
