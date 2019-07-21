import React from "react";
import { NavLink } from "react-router-dom";

const Results = ({ score }) => {
  return (
    <div>
      <h2>
        You got {score} {score === 1 ? "answer" : "answers"} right!
      </h2>
      <button className="btn" aria-label="play-again-button">
        <NavLink to="/" className="btn">
          Play again
        </NavLink>
      </button>
    </div>
  );
};

export default Results;
