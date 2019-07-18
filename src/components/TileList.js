import React from "react";

const Tile = ({ tile: { picture, alt, id }, getTileId }) => {
  return (
    <div className="tile" onClick={() => getTileId(id)}>{id}
      <img src={picture} alt={alt} />
    </div>
  );
};

const TileList = ({ ourTiles, getTileId }) => {
  return (
    <div className="flex-container">
      {ourTiles.map(tile => {
        return <Tile key={tile.id} tile={tile} getTileId={getTileId} />;
      })}
    </div>
  );
};

export default TileList;
