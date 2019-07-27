import React from "react";

const Emoji = ({ showEmoji }) => {
  return (
    <div className="emoji-content">
      <span role="img" aria-label="emoji">
        {showEmoji.emoji}
      </span>
      <p>{showEmoji.feedbackText}</p>
    </div>
  );
};

export default Emoji;
