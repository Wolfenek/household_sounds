import React from 'react'
import { NavLink } from "react-router-dom";

const Final = () => {
  return (
    <div>
      <h1>You got that many right!</h1>
      <NavLink to="/game" className="btn">
          Play again
      </NavLink>
    </div>
  )
}

export default Final
