import React, { useState, useEffect } from "react";
import shuffle from "lodash/shuffle";
// import { GameTiles } from "../data/HouseholdGame";

// Child component
const Tile = ({ tile: { picture, alt, id }, getTileId, canAnswer }) => {
  return (
    <div className="tile" id={id} onClick={canAnswer ? getTileId : null}>
      {id}
      <img src={picture} alt={alt} />
    </div>
  );
};

// Parent component
const TileList = ({ tiles, getTileId, canAnswer }) => {
  // const [tiles, setTiles] = useState(shuffle(GameTiles));

  return (
    <div className="tile-container">
      {tiles.map(tile => {
        return (
          <Tile
            key={tile.id}
            tile={tile}
            getTileId={getTileId}
            canAnswer={canAnswer}
          />
        );
      })}
    </div>
  );
};

export default TileList;
