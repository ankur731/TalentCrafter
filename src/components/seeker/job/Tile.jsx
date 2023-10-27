import React from "react";
import "./Tile.css"

function Tile(props) {
  return (
    <div className="col-4">
      <div className="card tile" style={{backgroundColor:props.bgColor}}>
        <p>{props.heading}</p>
        <h5>{props.data}</h5>
      </div>
    </div>
  );
}

export default Tile;
