import React from "react";

const CallToAction = ({play, playButtonText}) => {
  return (
    <>
      <h2>What item makes that sound? Listen carefully and choose!</h2>
      <button className="btn" aria-label="start-button" onClick={play}>
        {playButtonText}
      </button>
    </>
  );
};

export default CallToAction;
