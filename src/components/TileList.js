import React from "react";
import { GameTiles } from "../data/HouseholdGame";

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
const TileList = ({ getTileId, canAnswer }) => {
  return (
    <div className="tile-container">
      {GameTiles.map(tile => {
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
