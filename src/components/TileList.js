import React from "react";

// Child component
const Tile = ({ tile, getTileId, canAnswer }) => {
  return (
    <div className="tile" id={tile} 
    onClick={canAnswer ? getTileId : null}
    // onClick={getTileId}
    >
      <p>{tile}</p>
    </div>
  );
};

// Parent component
const TileList = ({ tiles, getTileId, canAnswer }) => {
  return (
    <div className="tile-container">
      {tiles.map(tile => {
        return (
          <Tile
            key={tile}
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
