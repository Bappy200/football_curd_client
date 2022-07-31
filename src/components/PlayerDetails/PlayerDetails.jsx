import React from 'react'
import "./PlayerDetails.css"
function PlayerDetails({player}) {
  const {id, name, salary} = player;
  console.log(player);
  return (
    <div>{name}</div>
  )
}

export default PlayerDetails