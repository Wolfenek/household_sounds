import React from "react";

const Tile = ({ tile: { picture, alt, id } }) => {
  return (
    <div className="tile">{id}
      <img src={picture} alt={alt} />
      
    </div>
  );
};

const TileList = ({ ourTiles }) => {
  return (
    <>
      {ourTiles.map(tile => {
        return <Tile key={tile.id} tile={tile} />;
      })}
    </>
  );
};

export default TileList;
