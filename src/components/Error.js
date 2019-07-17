import React from "react";
import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <div>
      Oops, something went wrong. But don't worry{" "}
      <NavLink to="/" className="btn btn play">
        Go to Home Page
      </NavLink>
    </div>
  );
};

export default Error;
