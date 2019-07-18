import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="Home">
      <div className="intro">
        <h2>
          What sound is it? Listen and click on the correct image to gain
          points.
        </h2>
        <NavLink to="/game" className="btn">
          Play
        </NavLink>
      </div>
    </div>
  );
};

export default Home;
