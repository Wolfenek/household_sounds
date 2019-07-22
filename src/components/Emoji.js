import React from "react";

const Emoji = ({showEmoji}) => {
  return (
    <>
      <span role="img" aria-label="emoji" className="emoji">
        {showEmoji.emoji}
      </span>
      <p>{showEmoji.feedbackText}</p>
    </>
  );
};

export default Emoji;
