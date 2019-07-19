import React from "react";

const Tile = ({ tile: { picture, alt, id }, getTileId, canAnswer }) => {
  return (
    <div className="tile" id={id} 
    onClick={canAnswer ? getTileId : null}>
    {id}
      <img src={picture} alt={alt} />
    </div>
  );
};

const TileList = ({ ourTiles, getTileId, canAnswer }) => {
  return (
    <div className="tile-container">
      {ourTiles.map(tile => {
        return <Tile key={tile.id} tile={tile} getTileId={getTileId} canAnswer={canAnswer}/>;
      })}
    </div>
  );
};

export default TileList;
