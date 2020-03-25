
import React, { useState, useEffect } from 'react';
import India from './India';
import State from './State';
import data from './map-data.json';
import Sidemap from "./Sidemap";

const Map = () =>{

   const mapList = data.map((state, index) =>{
   console.log(state)
    return (
         <State key={index}
      fillColor="#ffffff" 
      cords={state.cords} 
      name={state.name}>
    </State>
    )
  });

  return (
      <div className="svg-parent">
      <svg id="chart" width="650" height="750" viewBox="0 0 650 750" preserveAspectRatio="xMidYMid meet">
        <Sidemap/ >
        
        <g className="states">
          {mapList}
        </g>
        
        <India></India>
  </svg>
  {mapList}
</div>

  )
}

export default Map;

