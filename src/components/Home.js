import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="intro">
      <h2>
        What sound is it? Listen and click on the correct image to gain points.
      </h2>
      <NavLink to="/game" className="btn btn play">
        Play
      </NavLink>
    </div>
  );
};

export default Home;
