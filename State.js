
import React from 'react';

const State = ( { name, cords, fillColor }) =>{
  return (
    <path fill={fillColor} d={cords} pointerEvents="all" style={{cursor: 'pointer'}}>
      <title>19.77% from {name}</title>
    </path>
  )
}

export default State;

